class Api::V1::ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery :with => :null_session
  skip_before_action :verify_authenticity_token, :if => :json_request?
  before_filter :parse_request, :only => [:create, :update]

  rescue_from ActiveRecord::RecordNotFound, :with => :render_404

  protected

  def render_404
    render :json => {:message => "Resource not found"}, :status => :not_found
  end

  def json_request?
    request.format.json?
  end

  def parse_request
     @json = JSON.parse(request.body.read)
   end
end
