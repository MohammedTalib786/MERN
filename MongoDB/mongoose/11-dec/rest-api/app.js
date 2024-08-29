const express = require('express')
const app = express()
const port = process.env.PORT || 2000;
require('./db/connect')
const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello There! Welcome to my Rest Api <br> Use /users to go to the api and /id for get a particular id')
})

app.listen(port, () => console.log(`The app is live at http://localhost:${port} `))
