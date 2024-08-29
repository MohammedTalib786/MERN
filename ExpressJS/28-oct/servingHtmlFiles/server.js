const express = require('express');
const port = 3000;
const app = express();
const router = require('./routes/user')
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')))


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

app.use('/users', router)

app.listen(port, () => console.log(`The app is listening at http://localhost:${port}`))




