const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('This is a User Page')
})






router.route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        console.log(req.user)
        res.send(`Update user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        console.log(req.user)
        res.send(`Delete user with ID ${req.params.id}`)
    })

const users = [{ name: 'Talib' }, { name: 'Aliza' }]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})





router.get('/login', (req, res) => {
    res.send('The Login Page of User')
})

// Type 0 or 1 in search (user/1or0) as there are only 2 users

module.exports = router;
