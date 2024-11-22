const express = require('express')
const router = express.Router()
const doctorinfo = require('../schema/doctor.js')
const patientinfo = require('../schema/patient.js')
const diseaseinfo = require('../schema/disease.js')
const bcrypt = require('bcrypt')

const { default: mongoose } = require('mongoose')


router.get('/d', async (req, res) => {
    try {
        const users = await doctorinfo.find()
        res.json(users)

    } catch (err) {
        console.log("error:" + err)
    }
})
router.get('/p', async(req,res) => {
    try {
        const users = await doctorinfo.find()
        res.send(users)
    } catch (err) {
        console.log("error:" + err)
    }
})

// signup for doctor
router.post('/dsignup', async(req,res)=>{
    const passhash = await bcrypt.hash(req.body.password,10)
    const user = await doctorinfo.create({
        name: req.body.name,
        password: passhash
    })
    res.send('new doctor account generated')
})
// login for doctor
router.get('/dlogin', async(req,res)=>{
        const { username, password } = req.body
        const user = await doctorinfo.findOne({ "username": username })
        if (!user) {
            res.sendStatus(404) 
        }
        else {
            const check = await bcrypt.compare(password,user.password)
            if (check) res.sendStatus(200);
            else { res.sendStatus(403) };
        }
})
// get disease info
router.get('/dis_info', async(req,res)=>{
    try {
        const users = await diseaseinfo.find()
        res.send(users)
    } catch (err) {
        console.log("error:" + err)
    }
})


// signup for patient
router.post('/psignup', async(req,res)=>{
    const passhash = await bcrypt.hash(req.body.password,10)
    const user = await patientinfo.create({
        name: req.body.name,
        password: passhash
    })
    res.send("new patient account generated")
})
// login for patient
router.get('/plogin', async(req,res)=>{
    const { username, password } = req.body
    const user = await patientinfo.findOne({ "username": username })
    if (!user) {
        res.send('not found') 
    }
    else {
        // res.send(JSON.stringify(user));
        const check = await bcrypt.compare(password,user.password)
        if (check) res.sendStatus(200);
        else { res.sendStatus(403) };
    }
})
// post disease info
router.post('/dis_post', async(req,res)=>{
    const {name,phone_number,disease_image,descryption} = req.body
    const user = await diseaseinfo.create({
        name:name,
        phone_number:phone_number,
        disease_image:disease_image,
        descryption:descryption
    })
    res.sendStatus(200);
})



// router.post('/login', async (req, res) => {
    
//         const { username, password } = req.body
//         const user = await userinfo.findOne({ "username": username })
//         if (!user) {
//             res.sendStatus(404) 
//         }
//         else {
//             const check = await bcrypt.compare(password,user.password)
//             if (check) res.sendStatus(200);
//             else { res.sendStatus(403) };
//         }

//     // catch (err) {
//     //     res.send(err)
//     // }
// })

// router.get('/username', async (req, res) => {
//     const db = await userinfo.find();
//     data = []
//     { db.map(x => data.push(x.username)) }
//     res.send(db[0].username);
//     res.send(data)
// })

// router.get('/:id', async (req, res) => {
//     try {
//         const user = await userinfo.findById(req.params.id);
//         res.send(user ? "user found" : "not found")

//     } catch (err) {
//         console.log("error:" + err)
//     }
// })

// router.post('/', async (req, res) => {
//     const passhash = await bcrypt.hash(req.body.pass,10)
//     const user = await userinfo.create({
//         username: req.body.name,
//         email: req.body.mail,
//         password: passhash
//     })
//     res.send('new account generated')
// })

module.exports = router