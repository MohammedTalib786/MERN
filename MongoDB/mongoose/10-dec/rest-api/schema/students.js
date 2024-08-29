const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    pin: {
        type: Number,
    }
})


const Student = new mongoose.model("Student", studentSchema)

module.exports = Student
