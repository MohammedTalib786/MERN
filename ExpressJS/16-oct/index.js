const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "static")))

app.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname, 'hello.html'))
})

app.get('/name:yourName', (req, res) => {
    res.send('Hello: ' + req.params.yourName)
})

app.listen(port, () => {
    console.log(`The app listening on port ${port}`)
})

