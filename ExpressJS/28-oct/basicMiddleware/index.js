const express = require('express');
const app = express();
const port = 2000;
const auth = require('./routes/auth')
const user = require('./routes/user')

app.use('/auther', auth)
app.use('/user', user)

app.get('/', (req, res) => {
    res.send('Hello Middle')
})

app.listen(port, ()=> console.log(`The app is live at http://localhost:${port}`) )


