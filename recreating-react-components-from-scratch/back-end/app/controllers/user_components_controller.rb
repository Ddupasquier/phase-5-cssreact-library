class UserComponentsController < ApplicationController
    before_action :find_user_comp, only: [:show]

    def index
        user_components = UserComponent.all
        render json: user_components, status: :ok
    end

    def show
        @user_component
        render json: @user_component, status: :ok
    end

    def create
        user = UserComponent.create!(component_params)
        render json:user
    end

    private

    def component_params
        params.permit(:user_id)
    end

    def find_user_comp
        @user_component = UserComponent.find_by(id:params[:id])
    end
end
