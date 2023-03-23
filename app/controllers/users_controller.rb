class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    def index
        users = User.all
        render json: users, status: :created
    end

    def show
        user = find_user
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = find_user
        user.update(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = find_user
        user.destroy
        # head :no_content
        render json: {message: "User deleted successfully!"}, status: :ok
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :email, :username, :password)
    end

    def not_found_response
        render json: { error: "User not found" }, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end
end
