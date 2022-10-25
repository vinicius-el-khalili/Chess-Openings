// modules
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// import json file
const data = require('./eco.json')

// create Opening Schema & Model
const Schema = mongoose.Schema;
const openingSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    eco:{
        type:String,
        required:true
    },
    fen:{
        type:String,
        required:true
    },
    moves:{
        type:String,
        required:true
    }
})
const Opening = mongoose.model('Opening',openingSchema)

// configure .env
dotenv.config()

// connect to MongoDB and add files to collection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        data.map(opening=>{
            Opening.create(opening)
        })
        console.log('done')
    })