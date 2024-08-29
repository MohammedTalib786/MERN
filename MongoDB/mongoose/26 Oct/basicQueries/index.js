const mongoose = require('mongoose')

const data = require('./data')
mongoose.connect('mongodb://localhost:27017/Main')

// data.find()
// data.findById('653a6ea319c71711b6f2dede')



// func()
// async function func() {
//     try {
//         const Data = await data.find({name: 'Talib'}).limit(2)
//         // await Data.save()
//         console.log(`Data Saved \n ${Data} `)
//     }
//     catch (err) {
//         console.log(`new Error ${err} `)
//     }

// }


// Func()
// async function Func(){
//     try{
//         const Daata = await data.find().select('name')
//         // const Daata = await data.deleteOne({name: 'Talib'})
//         // const Daata = await data.find().select('name').select('age')
//         // await Daata.save()

//         // console.log(`data Saved ${Daata}`)
//         console.log(Daata)

//     }
//     catch(err){
//         console.log(err.message)
//     }

// }


// basically complex query looks like this in mongoose
funC()
async function funC(){
    try{
        // const Dataa = await data.find()
        const Dataa = await data.find().where('name').equals('Talib').where('age').gte(20).lt(40).select('age').select('name')
        // await Dataa.save()
        console.log(Dataa)

    }
    catch(err){
        console.log(err.message)
    }

}



