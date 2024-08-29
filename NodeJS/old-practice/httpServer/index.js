import fs from 'fs';
import http from 'http';

const port = process.env.PORT || 2000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');

    if (req.url == '/') {
        res.statusCode = 200;
        let data = fs.readFileSync('index.html')
        res.end(data.toString())
    }

    else if (req.url == '/contact') {
        res.statusCode = 200;
        let data = fs.readFileSync('contact.html')
        res.end(data.toString())
    }


    else if (req.url == '/about') {
        res.statusCode = 200;
        let data = fs.readFileSync('about.html')
        res.end(data.toString())
    }


    else {
        res.statusCode = 404;
        let data = fs.readFileSync('404.html')
        res.end(data.toString())
    }


})


server.listen(port, () => {
    console.log(`The Server is Listening on Port ${port}`)
})


