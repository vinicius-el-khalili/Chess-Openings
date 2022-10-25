const mongoose = require('mongoose')
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
module.exports = Opening