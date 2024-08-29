console.log('Hello')

const http = require('http');
const port = process.env.PORT || 3100;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World!</h1> <p>This is a Paragraph</p>');

})

server.listen(port, ()=>{
    console.log(`The server is Listening on Port ${port}`);

})

