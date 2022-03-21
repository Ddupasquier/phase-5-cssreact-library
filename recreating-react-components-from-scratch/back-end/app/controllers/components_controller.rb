class ComponentsController < ApplicationController
    before_action :find_component, only: [:show]
    
    def index
        components = Component.all
        render json: components, status: :ok
    end

    def show
        @component
        render json: @component, status: :ok
    end

    def create
        user = User.find(session[:user_id])
        comp = Component.new(component_params)
        comp.user = user
        comp.save
    end

    private

    def component_params
        params.permit(:name, :html, :css)
    end

    def find_component
        @component = Component.find_by(id:params[:id])
    end
end
