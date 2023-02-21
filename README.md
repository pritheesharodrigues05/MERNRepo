# MERNRepo

Files Created
#1.	Authentication Controller
	User registration 
•	Implemented registerUsers functionality to register the user details like username, email and password. Implemented async await method for registering user. Used package called express async handler to handle the exceptions. Implemented bcryptpassword to store the hashed password

	User Login : 
•	Implemented Login functionality for registered users. 
Once user logs in an token is generated which is implemented through the JWT token package. Based on the logged In user jwt token is generated for that particular user. Implemented a method called generate token to generate jwttoken signature based on user id and secret key.

2.	User Controller:
	 fetchUser:
•	Implemented a method called fetchUser to retrieve all the registered users.
	getUserByEmail: 
•	Implemented this functionality to check the user details based on the email requested.
	getLoggedInUser :  Used this functionality to access the api based on loggedIn user. Used JWTtoken to access these protected api’s


3.	Db.js :
Implemented this file for connecting to mongodb through mongoose package.
4.	Authentication middleware: 
Implemented this middleware file for verifying the Jwttoken generated.
Implemented passport to achieve authentication middleware, user JWtstrategy to receive secret key and JWT Bearer Token. Based on the user details fetched from the jwt token it will verify if it’s an authorized user.
5.	Model file : Implemented a model for user
6.	Auth routes and User routes : 
Implemented authentication routing file for register and login user. 
Written functionality for validation on email, password, and username while registering the user. Used the package called express validator and its methods called check() and validationResult()


