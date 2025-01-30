const mongoose = require("mongoose")
const BlogSchema = new mongoose.Schema({
    title: String,
    images: String,
    description: String,
})

module.exports = mongoose.model('Blog', BlogSchema)