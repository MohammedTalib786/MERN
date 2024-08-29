const express = require('express')
const app = express()
const port = process.env.PORT || 2000;
const path = require('path')
const fs = require('fs')


app.use(express.static(path.join(__dirname, 'public')))

app.get('/hello', (req, res) => {
    // here when we set h1 tag in it so express put it as an html doc text/html
    res.send('<h1>Hello World!</h1>')
})

app.get('/about', (req, res) => {
    // here we does not provide any tag so express does not provide any content type and it shows in black bg
    res.write('This is about Page')
    res.send()
})

app.get('/json', (req, res) => {
    // here when we provide .json so express consider its content type and put application/json 
    let data = fs.readFileSync('sample.json', 'utf-8')
    res.json(data)
})



app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))

