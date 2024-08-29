console.log(2)

const fs = require('fs')
const path = require('path')
const http = require('http')
const port = process.env.PORT || 2000;

const server = http.createServer()

server.on('request', (req, res) => {
    if (req.url == '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')


        // Read File with fs read File Sync

        // let data = fs.readFileSync('note.txt', 'utf-8')
        // res.end(data)


        // Read File with fs read Stream

        // let rStream = fs.createReadStream('note.txt', 'utf-8')
        // rStream.on('data', (that) => {
        //     res.end(that)
        //     console.log(that)
        // })
        // rStream.on('end', (that) => {
        //     res.end(that);
        //     console.log(that);
        // })
        // rStream.on('error', (err) => {
        //     res.end('File Not Found');
        //     console.log('Error Occured', err);
        // })

        // Read File with fs Stream Pipes

        let rStream = fs.createReadStream('note.txt', 'utf-8')
        rStream.pipe(res)

        // res.end('Hello')


    }

    else if (req.url == '/json') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        let data = fs.readFileSync('sample.json', 'utf-8')
        res.end(data)
    }

    else {
        res.statusCode = 404
        res.end('404 Page NOT Found')

    }
})

server.listen(port, () => console.log(`The app is Live at http://localhost:${port}`))

