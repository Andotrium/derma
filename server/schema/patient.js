const mongoose = require('mongoose')

const dataschema = new mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('patient',dataschema)