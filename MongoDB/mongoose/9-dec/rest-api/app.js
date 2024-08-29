const express = require('express')
const app = express()
const port = process.env.PORT || 2000;
require('./db/database')
const Student = require('./models/students')

app.use(express.json())

app.post('/students', (req, res) => {
    const create = new Student(req.body)
    create.save()
        .then(v => {
            res.status(201).send(v)
            console.log(v)
        })
        .catch(e => {
            res.send(e)
            console.log(e)
        })
})

app.get('/', (req, res) => {
    res.send("Hello World 9 Dec Rest Api")
})


app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))
