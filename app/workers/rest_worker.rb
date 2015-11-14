class RestWorker
  include Sidekiq::Worker
  sidekiq_options :retry => 1

  def perform(method, params = {})
    current_time = Time.now.in_time_zone("Pacific Time (US & Canada)")

    case method
    when "fetch_campaigns"
      organization_id = params[:organization_id] || Organization.where(:external_id => 34).first_or_create.id     # TODO: Remove this hardcoded reference to organization #34
      organization = Organization.where(:id => organization_id).first_or_create
      organization_external_id = organization.external_id
      raise "No external ID for Organization ##{organization.id}" if organization_external_id.blank?

      current_page = params[:first_page] || 1
      last_page = params[:last_page]

      url = "http://dev-api1.classy-test.org/organization/#{organization_external_id}/campaign"
      request_params = {
        :filters => "status%3Dactive",
        :page => current_page
      }

      while (last_page.blank? || current_page <= last_page) do
        request_params[:page] = current_page
        request_params[:last_page] = last_page if last_page.present?

        puts "Requesting page ##{current_page} of #{last_page || 'unknown'}..."
        response_hash = perform_request(url, request_params)
        last_page ||= response_hash["last_page"]

        campaigns_array = response_hash["data"] || []
        campaigns_array.each do |campaign_hash|
          campaign_external_id = campaign_hash["id"]
          campaign = Campaign.where(:external_id => campaign_external_id).first_or_initialize
          campaign.organization = organization
          campaign.name = campaign_hash["name"]
          campaign.status = campaign_hash["status"]
          campaign.save!
        end

        sleep(2)
        current_page += 1
      end
    when "fetch_donations"
      campaigns = params.has_key?(:campaign_id) ? Campaign.where(:id => params[:campaign_id]) : Campaign.where(:status => "active")

      campaigns.includes(:donations).find_each do |campaign|
        campaign_external_id = campaign.external_id
        known_donation_ids = campaign.donations.pluck(:external_id)

        current_page = 1
        last_page = nil

        url = "http://dev-api1.classy-test.org/campaign/#{campaign_external_id}/transaction"
        request_params = {
          :page => current_page
        }

        while (last_page.blank? || current_page <= last_page) do
          request_params[:page] = current_page
          request_params[:last_page] = last_page if last_page.present?

          puts "Requesting page ##{current_page} of #{last_page || 'unknown'}..."
          response_hash = perform_request(url, request_params)
          last_page ||= response_hash["last_page"]

          donations_array = response_hash["data"] || []
          donations_array.each do |donation_hash|
            donation_external_id = donation_hash["id"]
            donation = Donation.where(:external_id => donation_external_id).first_or_initialize

            donator_email = donation_hash["member_email_address"]
            donator_name = donation_hash["member_name"]
            donator = Donator.where(:email => donator_email, :name => donator_name).first_or_create
            donation.donator = donator

            donation.campaign = campaign
            donation.amount = donation_hash["donation_net_amount"]
            donation.save!
          end

          sleep(2)
          current_page += 1
        end

      end
    end
  end

  def perform_request(url, params = {})
    params[:page] ||= 1

    url = "#{url}?#{params.to_query}"
    headers = {
      :authorization => "Bearer ebd27bc36632d6ef41ee18834edf5eb6f8ec3381a3c062484ab9dfb138f73639ffcf1496e178377cce5ad58d5687fec2066d97b52ab24f24d66d9b5fc7812151"
    }

    puts "URL: #{url}"
    response = RestClient.get(url, headers)
    response_hash = JSON.parse(response)
  end
end