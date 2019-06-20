class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            sign_in(@user)
            render json: @user, status: 200
        else
            render json: ['server error'], status: 422
        end
    end

    def destroy
        if current_user
            sign_out!
            # return {}  #does this satisfy render {} ??
            render json: {}
        else
            render json: ['No current user to logout'], status: 404 #flash.now
        end
    end
end
