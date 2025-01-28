const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    mobile: {
        type: Number,
        unique: true,
        required: true,
        minlength: 10,
        maxlength: 10,        
    },
    email: String,
    password: String,
})

module.exports = mongoose.model('User', UserSchema)
