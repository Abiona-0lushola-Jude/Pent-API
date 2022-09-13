const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT || 5001
require('dotenv').config()


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Connecting MongoDb
const connectionString = process.env.USER_URL
const connectionStringReview = process.env.REVIEW_URL
// mongoose.connect(connectionString,()=> console.log('User Database is  on..'))
mongoose.connect(connectionStringReview,()=> console.log('Review Database is  on..'))

// Adding Router middleware
app.use('/Pent', require('./Routers/router'))







app.listen(PORT, ()=> console.log( `SERVER IS NOW RUNNING ON PORT ${PORT}`))