// modules
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// models
const Opening = require('./models/openingModel')

// set express app
const app = express()
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connected to database')
    })
    .catch(err=>console.log(err))
app.get('/api/openings/:id',(req,res)=>{
    const {id} = req.params
    console.log(id)
    const opening = Opening.find({"_id":id})
    res.send(opening)
})
app.listen(process.env.PORT)
