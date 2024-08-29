
const User = require('./User.js')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Main')


// const user = new User({ name: 'Talib', age: 20 })

// user.save().then(() => console.log(`Data Saved \n ${user} `))


run()
async function run() {
    const user = await User.create({
        name: 'Aliza',
        age: 7,
        hobbies: ['Writing', 'Reading'],
        address: {
            street: 'Lig Colony'   
        },
        postAddress: {
            country: 'UAE'
        }
    })
    // user.name = 'Iqra'
    user.save()
    console.log(`user Saved \n ${user} `)


}


// Do this 2 or 3 more times Tommorrow
