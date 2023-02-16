const jwtStrategy =require('passport-jwt').Strategy;
const jwtExtractor= require('passport-jwt').ExtractJwt;
const userModel = require('../models/userModel');
require("dotenv").config();


const opt= {}

opt.jwtFromRequest= jwtExtractor.fromAuthHeaderAsBearerToken();
opt.secretOrKey = process.env.SECRET_KEY;

module.exports = (passport)=>{

    passport.use(
     
        new jwtStrategy(opt, async(jwtPayload,done) =>{
         
        var user = await userModel.findById(jwtPayload.id);
         try {
            if(user) {
          
                return done(null, user)
             }
             else{
    
    
             return done(null , {
                code: "404",
                message: "could not find your account",
                errors: {}
             })
    
    
             } 
         } catch (error) {
            
            return done(null , {
                code: "404",
                message: "could not find your account",
                errors:error
             })
    
            

         }
         
        }
        
        
        
        
        
        
        
        )

   
    )

}

