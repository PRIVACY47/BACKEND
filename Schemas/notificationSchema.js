const mongoose = require("mongoose")


const Schema = mongoose.Schema({
    date: {type: Date,default: Date.now},
    description : String,
})

module.exports =  mongoose.model("notification",Schema)