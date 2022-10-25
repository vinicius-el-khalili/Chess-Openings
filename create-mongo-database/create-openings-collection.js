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

const AddOpening = async (opening)=>{
    await Opening.create({
        name:opening.name,
        eco:opening.eco,
        fen:opening.fen,
        moves:opening.moves
    })
}

// connect to MongoDB and add files to collection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        data.map(opening=>{
            AddOpening(opening)
        })
        console.log('done')
    })