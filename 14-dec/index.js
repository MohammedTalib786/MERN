const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('hbs')
const path = require('path')

require('./database/db')
const Login = require('./schema/login')
const Register = require('./schema/register')

const partialPath = path.join(__dirname, './partials')
// const viewsPath = path.join(__dirname, './views')
// console.log(partialPath)
// console.log(viewsPath)

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    try {
        const data = new Register({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        const create = await data.save()
        res.status(201).send(create)
        console.log(create)
    } catch (e) {
        res.status(400).send('Registration Fails', e)
        console.log(e)
    }
})


app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const userEmail = await Register.findOne({ email: email })

        // res.send(userEmail.email)
        // console.log(userEmail.email )
        if (userEmail.email === email) {
            res.status(200).render('index')
            console.log('User Matched Login Successfull')
        }
        else if(userEmail.email !== email) {
            res.status(200).send('This user Does not Exist!')
            console.log('This user Does not Exist!')
        }

    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})


app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))
