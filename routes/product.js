const express = require('express')  
const router = express.Router()
const Product = require("../models/Product")
router.post("/", async (req, res) => {
    try {
        //Creating an object based on Mongoose Schema
        const product = new Product(req.body)
        await product.save()
        res.status(201).json(`Data Successfully Posted`)
    } catch (error) {
        res.status(500).json(`Error Found: ${error.message}`)
    }
})
router.get('/', async(req, res)=>{
    try {
        const products = await Product.find(req.body)
        res.status(200).json(products)        
    } catch (error) {
        res.status(500).json(`Error Found: ${error.message}`)      
    }
})
module.exports = router