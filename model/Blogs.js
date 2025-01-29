const mongoose = require('mongoose')
const BlogSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Number,
})

module.exports = mongoose.model('Blod', BlogSchema)