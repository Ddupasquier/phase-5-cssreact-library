class SessionsController < ApplicationController
  def create
    user = User.find_by(id: params[:id])
    session[:user_id] = user.id
    render json: user
  end

 
end
