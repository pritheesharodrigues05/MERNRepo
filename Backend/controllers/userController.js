
const expressAsyncHandler = require("express-async-handler")

const userModel = require("../models/userModel")

const fetchUser = expressAsyncHandler(async(req, res)=>{
 
    const user =await userModel.find();
    res.status(200).json({user});
}
)


const getUserByEmail = expressAsyncHandler(async(req, res)=>{


   const email = req.body;
   
   const userByEmail=await userModel.findOne(email);
   
   if(!userByEmail)
    {
    res.status(400)
    throw new Error('USer not found')
    }
    
    res.json({

    id: userByEmail.id,
    
    email: userByEmail.email,
    
    username : userByEmail.username


    })    // res.status(200).json({user});
}
)


const getLoggedInUser = async() =>{




}
module.exports= {

    fetchUser, getUserByEmail,
    getLoggedInUser

} 