namespace :donations do
  desc "TODO"
  task :fetch, [:campaign_id] => :environment do
    RestWorker::perform_async("fetch_donations")
  end

end
