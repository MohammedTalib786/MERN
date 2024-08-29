const express = require('express')
const app = express()
const port = process.env.PORT || 2000;
const path = require('path')
const hbs = require('hbs')
// app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.send('Hello')
// })

hbs.registerPartials(path.join(__dirname, './partial'))
app.set('view engine' , 'hbs')
app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.render('about')
})


app.listen(port, () => console.log(`The app is live at http://localhost:${port}`))
