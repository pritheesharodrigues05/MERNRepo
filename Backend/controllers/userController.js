
const expressAsyncHandler = require("express-async-handler")

const userModel = require("../models/userModel")

const fetchUser = expressAsyncHandler(async(req, res)=>{
 
    const user =await userModel.find();
    res.status(200).json({user});
}
)


const getUserByEmail = expressAsyncHandler(async(req, res)=>{


   const email = req.body;
   
   const loggedInUser=await userModel.findOne(email);
   
   if(!loggedInUser)
    {
    res.status(400)
    throw new Error('USer not found')
    }
    
    res.json({

    id: loggedInUser.id,
    
    email: loggedInUser.email,
    
    username : loggedInUser.username


    })    // res.status(200).json({user});
}
)
module.exports= {

    fetchUser, getUserByEmail

} 