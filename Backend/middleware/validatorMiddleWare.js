
// const validator = require('../helper/validate');

// const User = require("../models/userModel");

// const loginValidation = async(req, res, next) => {

// const validationRules={
//    "email" :"required | string | email | User_doen't_exist",
//    "password": " required | string | min:4 | max: 8 "
// }  




// await validator(req.body, validationRules , (err, status)=>{

//    if(!status){

//     res.status(412).send({
//         sucess:false,
//         message:'validation failed ',
//         data:err

//     })

//     return res;
//    }
//    else{

//         next();

//    }



// } ).catch(err => console.log(err));

// }

// module.exports ={

//     loginValidation
// }

