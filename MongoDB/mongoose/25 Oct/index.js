const mongoose = require('mongoose')
const testUser = require('./User')
mongoose.connect('mongodb://localhost:27017/test')


run()
async function run(){
    const user = await testUser.create({
        name: 'Talib',
        age: 20,
        createdTimes: 3,
    })

    user.save()
    console.log(`user has been Saved \n ${user} `)

}


