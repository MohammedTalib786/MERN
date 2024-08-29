const express = require('express')
const router = express.Router()

router.get('/', auth, (req, res) => {
    res.send('This is the Author Page')
})

function auth(req, res, next) {
    if (req.query.admin === 'true') {
        next()
    }
    else {
        res.send('No Author Found!')
    }
}

module.exports = router