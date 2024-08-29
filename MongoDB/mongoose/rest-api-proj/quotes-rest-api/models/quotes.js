const mongoose = require('mongoose')

const quotesSchema = new mongoose.Schema({
    id: {
        type: Number,

    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const Quotes = new mongoose.model("Quotes", quotesSchema)

module.exports = Quotes