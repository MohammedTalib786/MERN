const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,

    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 6,
        maxLenght: 20,

    },
    employee_id: {
        required: true,
        default: 5005,
        type: Number,
        immutable: true,
    }
})

module.exports = mongoose.model('emps', employee);
