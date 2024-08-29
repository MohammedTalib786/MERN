const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const user = require('./routes/user');
const auth = require('./routes/author')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/author', auth)
app.use('/user', user)

app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))
