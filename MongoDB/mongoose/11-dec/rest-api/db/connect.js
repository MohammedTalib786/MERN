const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/dec-11-rest')
    .then(v => console.log('Connection Established'))
    .catch(e => console.log(e))
