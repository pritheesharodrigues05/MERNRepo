const express = require('express')

const router = express.Router()

const passport =require("passport")

const  {fetchUser,getUserByEmail, getLoggedInUser}  = require('../controllers/userController');


router.route('/getUserDetails', passport.authenticate("jwt", {session:false, successFlash : "Sucessfuly authorized"}), {session:false}).get(fetchUser);

router.route('/getUserbyEmail', passport.authenticate("jwt", {session:false, successFlash : "Sucessfuly authorized"}), {session:false}).get(getUserByEmail);


router.route('/getloggedInUser',passport.authenticate("jwt", {session:false, successFlash : "Sucessfuly authorized"}), {session:false} ).get(getLoggedInUser);
module.exports=  router