class CommentsController < ApplicationController
    before_action :find_comment, only: [:show]

    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def show
        @comment
        render json: @comment, status: :ok
    end

    private

    def find_comment
        @comment = Comment.find_by(id:params[:id])
    end
end
