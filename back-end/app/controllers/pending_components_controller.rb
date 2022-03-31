class PendingComponentsController < ApplicationController
    def index
        pendings = PendingComponent.all
        render json: pendings, status: :ok
    end

    def show
        pending = PendingComponent.find(params[:id])
        render json: pending, status: :ok
    end

    def create
        user = User.find(session[:user_id])
        comp = PendingComponent.new(pending_params)
        comp.user = user
        comp.save
    end

    def destroy
        pending = PendingComponent.find_by(id:params[:id])
        pending.destroy
        head :no_content
    end

    def moveanddelete
        p = PendingComponent.find_by(id:params[:id])
        user = p.get_user
        new_comp = user.components.create!(name: p.name, html: p.html, css: p.css)
        p.destroy
        render json: new_comp, status: :created
    end

    private

    def pending_params
        params.permit(:name, :html, :css)
    end
end
