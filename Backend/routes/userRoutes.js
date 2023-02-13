const express = require('express')

const router = express.Router()

const  { registerUsers , loginUsers, fecthUserName} = require('../controllers/userController')

router.route('/').post(registerUsers)
router.route('/login').post(loginUsers)
router.route('/getUser').get(fecthUserName)

module.exports=  router