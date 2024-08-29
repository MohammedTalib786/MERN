const express = require('express')
const app = express()
const port = process.env.PORT || 2000;
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'hbs')
app.set('views', 'templates')

app.get('/handle', (req, res) => {
    res.render('index', {
        lang: 'JQuery'
    })
})

app.get('/about', (req, res) => {
    res.send('About Us')
})



app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))
