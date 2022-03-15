class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        @user
        render json: @user, status: :ok
    end

    private

    def find_user
        @user = User.find_by(id:params[:id])
    end
end
