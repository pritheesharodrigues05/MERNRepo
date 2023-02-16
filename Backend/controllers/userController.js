
const expressAsyncHandler = require("express-async-handler")

const userModel = require("../models/userModel")

const fetchUser = expressAsyncHandler(async(req, res)=>{
 
    const user =await userModel.find();
    res.status(200).json({user});
}
)
module.exports= fetchUser;