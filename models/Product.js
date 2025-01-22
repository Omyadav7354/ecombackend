const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    category: String,
    title: String,
    price: Number,
    discount: Number,
    color: Array,
    rating: Number,
    description: String,
    features: Array,
    images: Array
})

module.exports = mongoose.model('Product', ProductSchema)
