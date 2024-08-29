const mongoose = require('mongoose');

const method = new mongoose.Schema({
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
    },
    date: {
        type: Date,
        default: Date.now(),
        immutable: true
    }
})


method.methods.sayHi = function(){
    console.log(`Hi! My name is ${this.name} `)
}


module.exports = mongoose.model('Method', method)

