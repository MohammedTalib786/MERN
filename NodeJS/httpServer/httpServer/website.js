const fs = require('fs')
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    if (req.url == '/') {
        res.statusCode = 200;
        let data = fs.readFileSync('index.html');
        res.end(data.toString())
    }

    else if(req.url == '/about'){
        res.statusCode = 200;
        let data = fs.readFileSync('about.html')
        res.end(data.toString())
    }

    else if(req.url == '/contact'){
        res.statusCode = 200;
        let data = fs.readFileSync('contact.html');
        res.end(data.toString())
    }

    else{
        res.statusCode = 404;
        res.end('<h1>404 Page Not Found</h1><p>The Page you are looking for is not available</p>')
    }

})

server.listen(port, () => {
    console.log(`The server is Listening to Port ${port}`)
})
