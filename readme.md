 
## User Authentication and Authorization with Bearer Token

## Task Description:

Implement user authentication and authorization using Bearer tokens in a Node.js application with Express.js, Mongoose, and JWT. The application should follow the MVC pattern and include API documentation.

# Task Requirements:
Follow the MVC pattern with separate folders for models, views, and controllers.
Set up a MongoDB database using Mongoose.
Create a User model with appropriate fields (e.g., username, email, password, etc.).
Create a route for user registration.
Implement a controller function to handle user registration.
Hash the user's password before saving it to the database.
Return a success message upon successful registration.
Create a route for user login.
Implement a controller function to handle user login.
Verify the user's credentials.
Generate a JWT upon successful login.
Return the JWT to the user.
Create a middleware function to verify the JWT from the request headers.
Decode the token to get the user's information.
Attach the user's information to the request object.
Create a route to get user information.
Implement a controller function to handle the request.
Use the token verification middleware to protect this route.
Return the user's information retrieved from the token.
Detailed documentation for each API endpoint in Postman.
Include sample requests and responses for each operation.
Use proper error handling and validation.
Clean, readable, and well-documented code.
A brief README file explaining the project.


# Techstacks needs to be used : 

Node.js
Express.js
Mongoose (MongoDB)
Postman
