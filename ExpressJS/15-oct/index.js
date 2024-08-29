const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000


// Just remember to use it as an index main file thats why its in a public html folder (Statically) means it can not be changed.
app.use(express.static(path.join(__dirname, "public")))

app.get('/about', (req, res) => {
    // res.send('/about');
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/json', (req, res) => {
    res.json({ name: "Talib", age: 20, location: "Kurla", dialogue: "Don ko pakadna mushkil hi nahi naa mumkin hai..." })
})

app.get('/contact', (req, res) => {
    let data = fs.readFileSync('contact.html')
    res.send(data.toString())

})

app.get('/hello', (req, res) => {
    res.send('Hello World')

})

app.listen(port, () => {
    console.log(`The app listening on port ${port}`)
})

