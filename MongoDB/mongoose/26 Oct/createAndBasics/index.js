const mongoose = require('mongoose')
const User = require('./User')
mongoose.connect('mongodb://localhost:27017/Main')

run()
async function run() {
    try{
        const user = await User.create({
            name: 'Talib',
            age: 20,
            email: 'test@test.com',
            date: 4,
            address: {
                street: 'Lig Colony',
                city: 'Mumbai',
                zipcode: 400070,
            },
            hobbies: ['Writing', 'Reading'],
        });
        
        await user.save()
        console.log(`user Saved \n ${user}`)
    }

    catch(err){
        console.log(err.message)
    }
    
}

