const mongoose = require('mongoose');
const emps = require('./information');
mongoose.connect('mongodb://localhost:27017/Main');

// craeted 
/*
Created()
async function Created() {
    try {
        const data = await emps.create({
            name: 'Aliza',
            age: 7,
            employee_id: 5,
            email: 'test@test.com',

        });

        await data.save()
        console.log(`data Saved ${data} `)


    }
    catch (err) {
        console.log(err.message)
    }

}
*/

// read

Read()
async function Read() {
    const data = await emps.find().where('name').equals('Talib')
    
    // data.save()
    console.log(`User Read ${data} `)

}





