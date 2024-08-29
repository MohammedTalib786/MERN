const mongoose = require('mongoose')
const validator = require('validator')

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate(v) {
            if (!validator.isEmail(v)) { throw new Error('Invalid Email') }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})


const Login = new mongoose.model("Login", loginSchema)
module.exports = Login
