const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const router = require('./routes/blog')
const path = require('path')

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

//  Routing File
app.use('/blogs', router)

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

// 404 Page
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '404.html'))
})

app.listen(port, ()=> console.log(`The app is live at http://localhost:${port} `))
