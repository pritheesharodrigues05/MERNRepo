const express = require('express')
// const  dotenv = require('dotenv').config()
// const port = process.dotenv.PORT
const port= 5000;
const app= express()

app.listen(port, 'localhost', ()=> console.log(`server started on port number ${port}`) );

