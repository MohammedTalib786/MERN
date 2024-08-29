const express = require('express')
const router = express.Router()

router.get('/', auth, (req, res)=>{
    res.send('The Author Main Page')
})


// Custom Middleware
function auth(req, res, next){
    if(req.query.admin === 'true'){
        next()
    }
    else{
        res.send('No Auth')
    }
}

module.exports = router;