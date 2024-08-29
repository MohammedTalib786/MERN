const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/rest-api-9-dec')
    .then(v => console.log(`Connected`))
    .catch(e => console.log(e))