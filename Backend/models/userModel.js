const mongoose= require('mongoose');

const userSchema= mongoose.Schema({
   
    name:{
    type:String,
    required:[true, 'Please add  a name'],
    unique:true
   },
   
   email :{
    type:String,
    required:[true, 'Please add  an email']
    
   },

   password :{
    type:String,
    required:[true, 'Please add  an password']
    
   },

},
 {

    timestamps: true
 }
)

module.exports= mongoose.model('user', userSchema)