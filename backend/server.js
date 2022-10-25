// modules
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// models
const Opening = require('./models/openingModel')

// controllers
const openingController = require('./controllers/openingControllers')

// set express app
const app = express()
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connected to database')
        app.listen(process.env.PORT,()=>{console.log('listening...')})
    })
    .catch(err=>console.log(err))
app.get('/api/openings/:id',openingController)

