const mongoose = require('mongoose')

const validator = require('validator')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error('Emal valid nahi hai')
            }
        }
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: 10
    }
})

const Student = new mongoose.model("Student", schema)
module.exports = Student
