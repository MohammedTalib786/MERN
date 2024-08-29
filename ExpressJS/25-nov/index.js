const express = require('express')
const app = express()
const port = process.env.PORT || 2000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})

app.listen(port, () => console.log(`The App is live at http://localhost:${port} `))

