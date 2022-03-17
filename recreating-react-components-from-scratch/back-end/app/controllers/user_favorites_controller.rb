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

    private

    def find_user_fav
        @user_favorite = UserFavorite.find_by(id:params[:id])
    end
end
