const express = require('express')
const router = express.Router()
const User = require('../schema/userschema')

router.use(express.json())

//find all
router.get('/', async (req, res) => {
    try {
        const reed = await User.find().sort({"id": 1})
        res.status(200).send(reed)
    } catch (e) {
        res.status(400).send(e)
    }
})


//find particular
router.get('/:id', async (req, res) => {
    try {
        const param = req.params
        const reedOne = await User.findOne(param)
        res.status(200).send(reedOne)
    } catch (e) {
        res.status(400).send(e)
    }
})


//create 
router.post('/', async (req, res) => {
    try {
        const create = new User(req.body)
        const result = await create.save()
        res.statusCode = 201
        res.send(result)
    } catch (e) {
        res.status(400).send(e)
    }
})


//update(patch) By Id
// router.patch('/:id', async (req, res) => {
//     try {
//         const _id = req.params.id
//         const Update = await User.findByIdAndUpdate(_id, req.body, { new: true })
//         res.status(201).send(Update)
//         console.log(Update)
//     } catch (e) {
//         res.status(400).send(e)
//         console.log(e)
//     }
// })


//Update by id (custom Id)
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const Update = await User.updateOne({ id: id }, req.body, { new: true })
        res.status(200).send(Update)
        console.log(Update)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})

//delete 
router.delete('/:id', async (req, res) => {
    try {
        const param = req.params.id
        const del = await User.findByIdAndDelete(param)
        //This Query Works
        res.status(200).send(del)
    } catch (e) {
        res.status(400).send(e)
    }

})




module.exports = router;
