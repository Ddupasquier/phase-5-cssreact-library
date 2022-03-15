class UserComponentsController < ApplicationController
    def index
        user_components = UserComponent.all
        render json: user_components, status: :ok
    end

    def show
        @user_component
        render json: @user_component, status: :ok
    end

    private

    def find_user
        @user_component = UserComponent.find_by(id:params[:id])
    end
end
