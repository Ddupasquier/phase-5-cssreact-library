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
        new_component = Component.create!(component_params)
        new_component.valid?
        render json: new_component, status: :created
    end

    private

    def component_params
        params.permit(:name, :html, :css)
    end

    def find_component
        @component = Component.find_by(id:params[:id])
    end
end
