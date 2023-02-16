const express = require('express')

const router = express.Router()

const passport =require("passport")

const  fetchUser = require('../controllers/userController');


router.route('/getUserDetails', passport.authenticate("jwt", {session:false, successFlash : "Sucessfuly authorized"}), {session:false}).get(fetchUser);

module.exports=  router