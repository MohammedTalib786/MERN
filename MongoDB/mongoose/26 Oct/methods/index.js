const mongoose = require('mongoose');
const Method = require('./method');
mongoose.connect('mongodb://localhost:27017');

// create function
/*
Create()
async function Create(){
    try{
        const data = await Method.create({
            name: 'Aamir',
            age: 50,
            email: 'test@test.com',
            date: 4,
        });
        await data.save()
        console.log(`data Saved ${data}`)
    }
    catch(err){
        console.log(err.message)
    }
}
*/

// delete function
/*
Delete()
async function Delete(){
    try{
        const Del = await Method.deleteOne({name: 'Talib'});
        // Del.save()
        console.log(Del)
    }
    catch(err){
        console.log(err)
    }
}
*/

// Update Function

/*
upd()
async function upd(){
    try{
        const met = await Method.updateOne({name: 'Patthan'}, {name: 'Pathaan'} );
        // met.save();
        console.log(met)
    }
    catch(err){
        console.log(err)
    }
}
*/

// Method Used

Func()
async function Func(){
    try{
        const met = await Method.findOne({name: 'Pathaan'});
        // met.save();
        console.log(met)
        met.sayHi()
    }
    catch(err){
        console.log(err)
    }
}





