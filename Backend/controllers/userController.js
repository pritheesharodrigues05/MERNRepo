const expressAsyncHandler = require("express-async-handler") 

const jsonwebtoken =require('jsonwebtoken')

const bcryptpassword= require('bcryptjs')

const User = require('../models/userModel')
const userModel = require("../models/userModel")




const registerUsers = expressAsyncHandler( async (req, res) =>{
    
    const {username, email, password} = req.body
    
   // to check If user has not entered any of the fields
    if(!username || !email || ! password){

    res.status(400);
    throw new Error('Please add all the fields')
    }

       //chec if user exists
    const userExists = await userModel.findOne({email});

    if(userExists){
    
         res.status(400);
         throw new Error('User already exists');

    }
    // creation of hash Password
    const salt= await bcryptpassword.genSalt(10)

    const hashedPassword=  bcryptpassword.hash(password, salt);


    const User =await userModel.create({

        username,
        email,
        password:hashedPassword

    })


    if(User) {
    
     res.status(201).json({
        _id: User.id,
        name:User.name,
        email:User.email
     })

    }

    else {

        res.status(400)
        throw new Error('User is not created invalid data')
    }


    // res.status(200).json({message: 'Register User'})


}
)



const loginUsers = expressAsyncHandler( async (req, res) =>{

    res.status(200).json({message: 'Login User'})


}
)

const fecthUserName = expressAsyncHandler( async (req, res) =>{

    res.status(200).json({message: 'User Data'})


}
)
module.exports = {

    registerUsers,
    loginUsers,
    fecthUserName


}