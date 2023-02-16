const expressAsyncHandler = require("express-async-handler")

const jsonwebtoken = require('jsonwebtoken')

const userModel = require("../models/userModel")

const bcryptpassword = require('bcryptjs')

require("dotenv").config();



const registerUsers = expressAsyncHandler(async (req, res) => {

    const { username, email, password } = req.body

    console.log("Username, Email, password from request body", username, email, password)
    // to check If user has not entered any of the fields
    if (!username || !email || !password) {

        res.status(400);
        throw new Error('Please add all the fields')
    }

    //chec if user exists
    const userExists = await userModel.findOne({ email });
    console.log("if the particular user exists on this email Id", userExists)

    if (userExists) {

        res.status(400);
        throw new Error('User already exists');

    }
    // creation of hash Password
    const salt = await bcryptpassword.genSalt(10)


    const hashedPassword = await bcryptpassword.hash(password, salt);

    console.log("hashed password", hashedPassword);



    const User = await userModel.create({

        username,
        email,
        password: hashedPassword

    })

    console.log("User created" + User.username, User.email, User.password)

    // console.log("Decrypteed password", decrypt(password))


    if (User) {

        res.status(201).json({
            _id: User.id,
            username: User.username,
            email: User.email,
            token: generateToken(User.id)
        })

    }

    else {

        res.status(400)
        throw new Error('User is not created invalid data')
    }


    // res.status(200).json({message: 'Register User'})


}
)



const loginUsers = expressAsyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await userModel.findOne({ email })


    console.log("finding user  by emailId", user)
    // const pass  = await userModel.findOne({password})

    // console.log("Decrypted Password", bcryptpassword.decrypt())
    console.log("CompareSync method to match passed and stored password", bcryptpassword.compareSync(password, user.password))


    if (user && bcryptpassword.compareSync(password, user.password)) {

        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user.id),
        })


    }
    else {

        res.status(400)
        throw new Error('Invalid Credentials')
    }

    // res.status(200).json({message: 'Login User'})


}
)


//generate JWT

const generateToken = (id) => {



    return jsonwebtoken.sign({ id }, process.env.SECRET_KEY, { expiresIn: '30d' })

}


module.exports = {

    registerUsers,
    loginUsers,


}