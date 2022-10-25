const Opening = require('../models/openingModel')
const mongoose = require('mongoose')
const GetSingleOpening = async (req,res) => {
    const {id} = req.params
    const opening = await Opening.findById(id)
    res.status(200).json(opening)
}
module.exports = GetSingleOpening