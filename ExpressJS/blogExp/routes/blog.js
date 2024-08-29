const express = require('express');
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogs')

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
})

router.get('/blogpost/:slug', (req, res)=>{
    myBlog = blogs.filter((e)=>{
        return blogs.slug == req.params.slug
    })
    res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
})

module.exports = router;
