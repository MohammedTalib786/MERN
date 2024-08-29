const mongoose = require('mongoose')
const validator = require('validator')

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
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


const Register = new mongoose.model("Register", registerSchema)
module.exports = Register
