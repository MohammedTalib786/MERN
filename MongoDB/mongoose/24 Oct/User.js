const mongoose = require('mongoose')


const post = new mongoose.Schema({
    country: String,
})


const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    date: Date,
    hobbies: [String],
    address: {
        street: String,
        city: String
    },

    postAddress: post,
})


module.exports = mongoose.model('User', userSchema)
