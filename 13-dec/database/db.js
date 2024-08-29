const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/contactform')
    .then(v => console.log(`Connection Successfull`))
    .catch(err => console.log(err))