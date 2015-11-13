class Api::V1::ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery :with => :null_session

  rescue_from ActiveRecord::RecordNotFound, :with => :render_404

  def render_404
    render :json => {:message => "Resource not found"}, :status => :not_found
  end
end
