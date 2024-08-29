const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(v) {
            if (!validator.isEmail(v)) { throw new Error('Email Validate nahi hai bhai!') }
        }
    },
    age: {
        type: Number,
        required: true
    }
})

const User = new mongoose.model("User", userSchema)
module.exports = User
