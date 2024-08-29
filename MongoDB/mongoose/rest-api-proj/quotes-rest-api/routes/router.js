const express = require('express')
const router = express.Router()
const Quotes = require('../models/quotes')

router.use(express.json())

// router.get('/', (req, res) => {
//     res.send('This is Router')
// })

// Read All
router.get('/', async (req, res) => {
    try {
        const reed = await Quotes.find().sort({id: 1}).select({_id: 0, __v:0})
        res.status(200).send(reed)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})


// For Users
// Read By Auth Id
router.get('/:id', async (req, res) => {
    try {
        const auth = req.params
        const reedOne = await Quotes.findOne(auth)
        res.status(200).send(reedOne)
        console.log(reedOne)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})


// For Devs
// Read / Find By Id
// router.get('/:id', async (req, res) => {
//     try {
//         const par = req.params.id
//         const reedbyId = await Quotes.findById({ _id: par })
//         res.status(200).send(reedbyId)
//         console.log(reedbyId)
//     } catch (e) {
//         res.status(400).send(e)
//         console.log(e)
//     }
// })

// Create
router.post('/', async (req, res) => {
    try {
        const quotes = new Quotes(req.body)
        const create = await quotes.save()
        res.status(201).send(create)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})


// Update
router.patch('/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const upd = await Quotes.findByIdAndUpdate({ _id: _id }, req.body, { new: true })
        res.status(200).send(upd)
        console.log(upd)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})

// Delete 
router.delete('/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const del = await Quotes.findByIdAndDelete(_id) // Or .findByIdAndDelete({_id: _id})
        res.status(200).send(del)
        console.log(del)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})


module.exports = router;
