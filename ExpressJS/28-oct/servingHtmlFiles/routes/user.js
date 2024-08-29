const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('The Users Main Page')
})


router.get('/login', (req, res) => {
    res.send('This is the Login Page')
})


router.get('/:id', (req,res)=>{
    res.send(`This is the user with ID ${req.params.id}`)
})


module.exports = router;


