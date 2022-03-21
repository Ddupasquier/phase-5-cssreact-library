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
        # user = Component.create!(component_params)
        # user_c = UserComponent.create!(user_id: sessions[:user_id], component_id: user_c.last[:component_id])
        # render json:user
    end

    private

    def component_params
        params.permit(:name, :html, :css)
    end

    def find_component
        @component = Component.find_by(id:params[:id])
    end
end
