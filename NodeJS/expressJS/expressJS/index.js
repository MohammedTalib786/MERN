console.log('Hello')

const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let data = fs.readFileSync('index.html');
    res.send(data.toString())
})

app.get('/about', (req, res) => {
    let data = fs.readFileSync('about.html');
    res.send(data.toString())
})


app.get('/contact', (req, res) => {
    let data = fs.readFileSync('contact.html');
    res.send(data.toString())
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


