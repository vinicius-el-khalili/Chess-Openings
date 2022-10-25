const Opening = require('../models/openingModel')
const mongoose = require('mongoose')

const getOpeningByFenId = async (req,res) => {
    const {fenID} = req.params
    console.log(fenID)
    const opening = await Opening.findOne({fenID:fenID})
    res.status(200).json(opening)
}

module.exports = getOpeningByFenId