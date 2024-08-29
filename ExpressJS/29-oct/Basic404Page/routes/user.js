const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('The main User Page')
})


module.exports = router;

