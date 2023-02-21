const express = require('express')

const router = express.Router()

const passport =require("passport")

const  {fetchUser,getUserByEmail, getLoggedInUser}  = require('../controllers/userController');


router.route('/getUserDetails').get(fetchUser);

router.route('/getUserbyEmail').get(getUserByEmail);


router.route('/getloggedInUser').get(getLoggedInUser);


module.exports=  router