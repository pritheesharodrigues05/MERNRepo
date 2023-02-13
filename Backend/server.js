const express = require('express');
const colors= require('colors')
const { errorHandler } = require('./middleware/ErrormiddleWare');
const connectDB = require('./config/db');
// const  dotenv = require('dotenv').config()
// const port = process.dotenv.PORT
const port= 5000;
const app= express()



app.use(express.json())

connectDB()

app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRouter'))

app.use(errorHandler)

// app.listen(port, 'localhost', ()=> console.log(`server started on port number ${port}`) );
app.listen(port, 'localhost', ()=> console.log(`server started on port number ${port}`) );

