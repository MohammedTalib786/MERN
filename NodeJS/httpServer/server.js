const http = require('http')

const port = process.env.PORT || 2000;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200

    // We've got a different ui/ output on browser when not use the setHeader and status code
    res.end('Hello')
})

server.listen(port, '127.0.0.1', ()=>{
    console.log(`The app is listen on port 2000`);
})

// We can also use 127.0.0.1 this method instead of localhost to watch out with the above code where we gave an extra parameter on listen after port

// to listen on Browser

// localhost:2000
// 127.0.0.1:2000


