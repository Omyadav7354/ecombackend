const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema({
    title: String,
    category: String,
    features: Array,
    images: Array,
    price: Number,
    discount: Number,
    rating: Number,
    description: String,
    color: Array
})

module.exports = mongoose.model('Product', ProductSchema)