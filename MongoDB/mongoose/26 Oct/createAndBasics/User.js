const mongoose = require('mongoose')

const newAddress = new mongoose.Schema({
    street: String,
    city: String,
    zipcode: Number,
})

const data = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20,
    },
    date: {
        type: Date,
        default: Date.now(),
        immutable: true,
    },
    address: newAddress,
    hobbies: [String],

})


module.exports = mongoose.model('User', data)
