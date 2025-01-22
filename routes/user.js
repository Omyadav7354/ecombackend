const express = require('express')  
const router = express.Router()
const User = require("../models/User")
router.post("/", async (req, res) => {
    try {
        //Creating an object based on Mongoose Schema
        const user = new User(req.body)
        await user.save()
        res.status(201).json(`Data Successfully Posted`)
    } catch (error) {
        res.status(500).json(`Error Found: ${error.message}`)
    }
})
router.get('/', async(req, res)=>{
    try {
        const users = await User.find(req.body)
        res.status(200).json(users)        
    } catch (error) {
        res.status(500).json(`Error Found: ${error.message}`)      
    }
})
module.exports = router