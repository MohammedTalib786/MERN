const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./database/db')
const User = require('./schema/users')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "public")))

app.get('/register', async (req, res) => {
    res.send('Get Register')
})

app.post('/register', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        })

        const create = await user.save()
        console.log(create)
        res.status(201).send(create)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})


app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))
