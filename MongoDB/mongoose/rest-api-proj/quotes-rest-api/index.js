const express = require('express')
const app = express()
const port = process.env.PORT || 3001
require('./database/database')
const router = require('./routes/router')
const path = require('path')
const hbs = require('hbs')
const partialPath = path.join(__dirname, 'partials')

app.use('/api', router)

// console.log('Hello')
// console.log(partialPath)
hbs.registerPartials(partialPath)

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/documentation', (req, res) => {
    res.render('documentation')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('*', (req, res) => {
    res.send('404 Page Not Found')
})

app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))
