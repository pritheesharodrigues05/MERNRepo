
const expressAsyncHandler = require("express-async-handler")

const userModel = require("../models/userModel")




const fetchUser = expressAsyncHandler(async (req, res) => {

    const user = await userModel.find();
    res.status(200).json({ user });
}
)


const getUserByEmail = expressAsyncHandler(async (req, res) => {


    const email = req.body;

    const userByEmail = await userModel.findOne(email);

    if (!userByEmail) {
        res.status(400)
        throw new Error('USer not found')
    }

    res.json({

        id: userByEmail.id,

        email: userByEmail.email,

        username: userByEmail.username


    })    // res.status(200).json({user});
}
)


const getLoggedInUser = expressAsyncHandler(async (req, res) => {


    console.log(req.user)

    const userDetail = req.user.id;

    console.log("User Detail",userDetail)

    const getLoggedInUser = await userModel.findById(userDetail)

    console.log("Finding for the logged In user in db", getLoggedInUser);

    if (!getLoggedInUser) {
        res.status(401)
        throw new Error('User not present')
    }

    res.status(200).json({

        email: getLoggedInUser.email,

        username: getLoggedInUser.username


    })

})
module.exports = {

    fetchUser, getUserByEmail,
    getLoggedInUser

} 