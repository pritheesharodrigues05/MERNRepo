
// const User = require("../models/userModel");
// const Validator = require('validatorjs');


// Validator.registerAsync("User_doen't_exist", async(value, attribute, req, passes)=>{
  
//           const queryOptions = {
//            name: value,
//           };
//           if(attribute){

//             queryOptions["_id"]= {$ne :attribute}
//           }

//           const exist = await User.findOne(queryOptions, "_id").lean();
//           if (exist) {
//               passes();
//           } else {
//               passes(false, "user does not exist for the given user name.");
//           }



// }
// );

// const validationErrorResponse = (res, errors) => {
//     return res.status(400).json({
//         code: "400",
//         errors: { fields: errors },
//         msg: "Field Error.",
//     });
// }



// module.exports ={Validator,validationErrorResponse };