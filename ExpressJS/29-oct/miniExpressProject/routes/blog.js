const express = require('express')
const router = express.Router()
const path = require('path')
const blogs = require('../data/blogs')

router.get('/', (req, res) => {
    // res.send('Blog Main Page')
    res.sendFile(path.join(__dirname, '../public/blogHome.html'))
})

router.get('/:slug', (req, res) => {
    // blogs.forEach((e)=>{
    //     console.log(e.title)
    // })
    blogs.filter((e) => {
        return e.slug === req.params.slug
    })
    // res.send('You are in a Blog Post')
    res.sendFile(path.join(__dirname, '../public/blogPost.html'))

})

module.exports = router

