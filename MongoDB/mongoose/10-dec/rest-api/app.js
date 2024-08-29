const express = require('express')
const app = express()
const port = process.env.PORT || 2000;
const db = require('./db/connect')
const Student = require('./schema/students')

app.use(express.json())

// app.post('/students', (req, res) => {
//     const newStud = new Student(req.body)
//     newStud.save()
//         .then(v => {
//             res.statusCode = 201
//             res.send(v)
//         })
//         .catch(err => {
//             res.statusCode = 400
//             console.log(err)
//             res.send(err)
//         })

//     console.log(req.body)
// })


// Used async await method
app.post('/students', async (req, res) => {
    try {
        const newStud = new Student(req.body)
        const create = await newStud.save()
        console.log(create)
        res.status(201).send(create)
    }
    catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

app.get('/students', async (req, res) => {
    try {
        const reed = await Student.find()
        res.status(200).send(reed)
    }
    catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

// Find By state 
app.get('/students/:state', async (req, res) => {
    try {
        const data = req.params
        const reedOne = await Student.findOne(data)
        res.status(200).send(reedOne)
        console.log(reedOne)
    }
    catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

// Find by Id
app.get('/students/:id', async (req, res) => {
    try {
        const _ida = req.params.id
        const main = await Student.findById(_ida)
        res.statusCode = 200
        res.send(main)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})


// app.get('/students', async(req, res)=>{
//     const  reed = new Student(req.body)
// })

app.get('/', (req, res) => {
    res.send('Hello World')

})


app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))
