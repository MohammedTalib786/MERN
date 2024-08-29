const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    createdTimes: Number, 
})


module.exports = mongoose.model('testUser', userSchema)


