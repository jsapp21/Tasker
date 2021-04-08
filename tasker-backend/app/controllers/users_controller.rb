class UsersController < ApplicationController

    def create
        user = User.new(name: params[:name])

        if user.valid?
            user.save
            render json: user
        else
            render json: { error: 'Username is already taken. Try again.' }
        end
    end

    def login
        user = User.find_by(name: params[:name])
        
        render json: user
    end

end
