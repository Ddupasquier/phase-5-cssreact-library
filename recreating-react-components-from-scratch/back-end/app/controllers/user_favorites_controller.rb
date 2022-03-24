class UserFavoritesController < ApplicationController
    before_action :find_user_fav, only: [:show]

    def index
        user_favorites = UserFavorite.all
        render json: user_favorites, status: :ok
    end

    def show
        @user_favorite
        render json: @user_favorite, status: :ok
    end

    def create
        user = User.find(session[:user_id])
        fav = UserFavorite.new(fav_params)
        fav.user = user
        fav.save
        render json: fav, status: :created
    end

    private

    def find_user_fav
        @user_favorite = UserFavorite.find_by(id:params[:id])
    end

    def fav_params
        params.permit(:user_id, :component_id)
    end
end
