const http = require('http')
const port = process.env.PORT || 2000
const fs = require('fs')


const server = http.createServer((req, res) => {
    // If you comment out this setHeader you will see the document type chnages in the browser
    // res.setHeader('Content-Type', 'text/html')

    if (req.url == '/') {
        res.setHeader('Content-Type', 'text/html')
        res.statusCode = 200
        res.end('Hello')
    }

    else if (req.url == '/about') {
        res.setHeader('Content-Type', 'text/html')
        res.statusCode = 200
        res.end('This is the About Page')
    }
    

    // This is our api which also we've learned while express js in how to json to document
    else if (req.url == '/users') {
        res.statusCode = 200;
        let data = fs.readFileSync('./data.json', 'utf-8')
        res.end(data)
    }

    else {
        res.setHeader('Content-Type', 'text/html')
        res.statusCode = 404;
        console.log(req.url);
        res.end('404 Page NOT Found!')
    }

})




server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port} `);
})
