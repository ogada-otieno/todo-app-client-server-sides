class ApplicationController < ActionController::API
    # authentication and authorization methods

    # encode the user's details
    def encode_token(payload)
        JWT.encode(payload, "secret")
    end

    # decode the token
    def decode_token
        # get/retrieve the token from the headers
        auth_header = request.headers['Authorization']
        # check whether the token is present
        if auth_header
            # 'Bearer hajhdhgjshfjghsjfhshf'
            token = auth_header.split(' ')[1] # split the token by using splitting by space 
            # wrap the decoding process with an exception
            begin
                JWT.decode(token, 'secret', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end

    end

    # allow the user to access the app content
    def authorize_user
        # use the decode_token method to get user details
        decoded_token = decode_token()

        # take out the user ID
        # find the user that matches the ID
        if decoded_token
            # [{payload}, {headers}, {verify_signature}] 
            # {
            #     "id": 10,
            #     "first_name": "John",
            # }
            user_id = decode_token[0]['id']
            user = User.find_by(id: user_id)
            render json: user, status: 200 
        else
            render json: {error: 'User not found'}, status: 404
        end


        
    end

    # to return a response to the user about being authorized
    def authorize
        render json: {error: 'Unauthorized access!'}, status: :unauthorized unless authorize_user
    end
end
