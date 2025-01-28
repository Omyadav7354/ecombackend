const Product = require("../model/Product");
const express = require('express')
const router = express.Router()

router.post('/', async(req, res)=>{
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }
})
router.get('/', async(req, res)=>{
    try {
        const Products = await Product.find(req.body)
        res.status(200).json(Products)
        
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }
})
router.delete('/:id', async(req, res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }
})
router.put('/:id', async(req, res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product)

        
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }
})

module.exports = router