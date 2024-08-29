const express = require('express')
const { route } = require('./auth')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('The User Main Page')
})

router.get('/login', (req, res)=>{
    res.send('This is the User Login Page')
})

router.get('/:id', (req, res)=>{
    res.send(`This is The User with ID ${req.params.id} `)
})


module.exports = router;