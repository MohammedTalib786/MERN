const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is The Main User Page')
})

router.get('/login',(req, res)=>{
    res.send('The Login Page')
})

router.get('/:id',(req, res)=>{
    res.send(`This is The user with ID ${req.params.id}.`)
})

module.exports = router;


