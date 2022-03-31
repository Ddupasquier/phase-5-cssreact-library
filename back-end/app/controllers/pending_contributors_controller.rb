class PendingContributorsController < ApplicationController
    def index
        pendings = PendingContributor.all
        render json: pendings, status: :ok
    end

    def show
        pending = PendingContributor.find(params[:id])
        render json: pending, status: :ok
    end

    def create
        user = User.find(session[:user_id])
        comp = PendingContributor.new(pending_params)
        comp.user = user
        comp.save
        render json: comp
    end

    def destroy
        pending = PendingContributor.find_by(id:params[:id])
        pending.destroy
        head :no_content
    end

    private

    def pending_params
        params.permit(:is_contributor)
    end
end
