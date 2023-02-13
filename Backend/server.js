const express = require('express');
const { errorHandler } = require('./middleware/ErrormiddleWare');
// const  dotenv = require('dotenv').config()
// const port = process.dotenv.PORT
const port= 5000;
const app= express()


app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRouter'))

app.use(errorHandler)

// app.listen(port, 'localhost', ()=> console.log(`server started on port number ${port}`) );
app.listen(port, 'localhost', ()=> console.log(`server started on port number ${port}`) );

