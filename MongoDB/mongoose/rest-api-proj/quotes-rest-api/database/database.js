const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/quotes-api')
    .then(v => console.log('Connection Succesfull'))
    .catch(e => console.log(e))