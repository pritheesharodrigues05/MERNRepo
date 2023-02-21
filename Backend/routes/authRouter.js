const express = require('express')

const router = express.Router()
const { check, validationResult } = require('express-validator')

const { registerUsers, loginUsers } = require('../controllers/authController')


router.route('/').post(
// Performing validation using express-validator  
    check("username")  
        .isLength({ min: 4, max: 20 })
        .withMessage("user name must be between 4 to 20 characters")
        .trim(),

    check("email")
        .isEmail()
        .withMessage("Email is invalid")
        .normalizeEmail(),


    check("password")
        .isLength({ min: 8, max: 15 })
        .withMessage("your password should have min and max length between 8-15")
        .matches(/\d/)
        .withMessage("your password should have at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage("our password should have at least one sepcial character")

    // check("confirmPassword").custom((value, { req }) => {
    //     if (value !== req.body.password) {
    //         console.log(req.body.password, req.body.confirmPassword);
    //         throw new Error("confirm password does not match");
    //     }
    //     return true;
    // }),
 
 
 
 
 , (req, res, next) => {

    console.log("request parameters", req.params)
    const error = validationResult(req).formatWith(({ msg}) => msg);

    const hasError = !error.isEmpty();

    if (hasError) {
      res.status(422).json({ error: error.array() });
    } else {
      next();
    }







    }, registerUsers)


router.route('/login').post(loginUsers)


module.exports = router