const express = require('express');
const colors= require('colors')
const { errorHandler } = require('./middleware/ErrormiddleWare');
const connectDB = require('./config/db');
const passport= require("passport")
const middleWareConfig= require('./middleware/authmidlleware')
// const  dotenv = require('dotenv').config()
// const port = process.dotenv.PORT
const port= 5000;
const app= express()


app.use(express.json())

connectDB()

app.use(express.urlencoded({extended:false}))

//passport 

app.use(passport.initialize())

middleWareConfig(passport);
//api for goals
app.use('/api/goals', require('./routes/goalRouter'))


//api for user authentication
app.use('/api/auth', require('./routes/authRouter'))


//api for users
// passport.authenticate("jwt", {session:false, successFlash : "Sucessfuly authorized"}),
app.use('/api/users', passport.authenticate("jwt", {session:false}), require('./routes/userRoutes'))

app.use(errorHandler)

// app.listen(port, 'localhost', ()=> console.log(`server started on port number ${port}`) );
app.listen(port, 'localhost', ()=> console.log(`server started on port number ${port}`) );

