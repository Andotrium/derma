const mongoose = require('mongoose')
const { Component } = require('react')

const dataschema = mongoose.Schema({
    name:{
        type:String
    },
    phone_number: {
        type:Number
    },
    disease_image: {
        type:String
    },
    descryption: {
        type:String
    }
})

module.exports = mongoose.model('disease',dataschema)