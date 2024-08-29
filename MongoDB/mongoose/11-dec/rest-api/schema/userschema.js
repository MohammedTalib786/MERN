const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        minlength: 5
    },

    body: {
        type: String,
        required: true,
        minlength: 10
    }
})

const User = new mongoose.model("User", userSchema)

module.exports = User