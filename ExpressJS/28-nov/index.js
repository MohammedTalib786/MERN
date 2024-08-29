const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 2000;

app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/handlebars', (req, res) => {
    res.render('index', {
        nameChange: 'Mohammed Talib'
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>This is the About Us Page</h1> <br> <button><a href="/" >Go back to home Page </a> </button>')
})

app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))
