const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/user')

app.use('/user', router)

app.get('/', (req, res) => {
    res.send('Hello World params')
})


app.listen(port, () => console.log(`The app is listen on http://localhost:${port}.`))
