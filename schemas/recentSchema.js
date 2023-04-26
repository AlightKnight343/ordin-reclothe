const mongoose = require("mongoose")
const reqString = { type:String, required:true }
const moment = require("moment")
let now = new Date()
let dateStringWithTime = moment(now).format('YYYY-MM-DD HH:MM:SS');

const recentSchema = new mongoose.Schema({
    id: reqString,
    fabric: reqString,
    colour: reqString,
    age: reqString,
    torn: {type: Boolean, required:true},
    estimatedValue: {type: Number, required: true},
    date: {
        type:String,
        default: dateStringWithTime
    },
})

module.exports = mongoose.model("Recent", recentSchema)
