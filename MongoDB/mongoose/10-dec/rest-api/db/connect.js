const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/dec-10-rest-post')
    .then(v => console.log('Connected'))
    .catch(err => console.log('Error Occured'))


