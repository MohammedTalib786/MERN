// console.log(2)
const express = require('express')
const port = process.env.PORT || 3000;
const app = express();
const router = require('./routes/user')

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.use('/user', router)

// 404 page
app.get('*',(req, res)=>{
    res.send('404 Page Not Found')
    console.log(req.url)
})

app.listen(port, ()=> console.log(`The app is live at http://localhost:${port} `))
