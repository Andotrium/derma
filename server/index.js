const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const url = process.env.URI
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(url)
const con = mongoose.connection

con.on('open',()=>{
    console.log("connected...")
})
const router = require('./routes/users.js')
app.use('/api',router)

app.listen('8080',()=>{
    console.log('server running')
})