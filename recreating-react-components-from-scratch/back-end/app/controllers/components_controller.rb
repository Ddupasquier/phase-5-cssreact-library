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

    private

    def find_component
        @component = Component.find_by(id:params[:id])
    end
end
