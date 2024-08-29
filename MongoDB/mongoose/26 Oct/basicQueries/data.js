const mongoose = require('mongoose')

const data = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,
        lowercase: true,
    },

})

module.exports = mongoose.model('data', data)
