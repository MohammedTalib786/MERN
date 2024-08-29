const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/user')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/user', router);

app.get('/json', (req, res) => {
    res.json({
        name: 'Talib',
        age: 20,
        email: 'test@test.com'
    })
})

app.get('/download', (req, res) => {
    res.download('server.js')
})

app.listen(port, () => console.log(`The app is listen at http://localhost:${port}`))


