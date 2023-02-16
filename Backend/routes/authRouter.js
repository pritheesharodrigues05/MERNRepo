const express = require('express')

const router = express.Router()


const  { registerUsers , loginUsers} = require('../controllers/authController')

router.route('/').post(registerUsers)
router.route('/login').post(loginUsers)


module.exports=  router