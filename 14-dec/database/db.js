const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/contactform')
    .then(v => console.log('Database Connection Successfull'))
    .catch(e => console.log(e))