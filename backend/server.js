// modules
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// set express app
const app = express()
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connected to database')
    })
    .catch(err=>console.log(err))