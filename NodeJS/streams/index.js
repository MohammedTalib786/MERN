const fs = require('fs')
const http = require('http')
const server = http.createServer();
const port = process.env.PORT || 2000;

server.on('request', (req, res) => {
    // res.setHeader("Content-Type", 'text, html')

    // 1 method normal method
    // fs.readFile('note.txt', (err, data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString())
    // })

    // 2 method stream
    // const rstream = fs.createReadStream('note.txt')
    // rstream.on('data', (chunkdata) => {
    //     res.end(chunkdata)
    // });
    // rstream.on('end', ()=>{
    //     res.end()
    // });
    // rstream.on('error', (err)=>{
    //     console.log(err);
    //     res.end('file not Found')
    // });


    // 3 method stream pipes
    const rstream = fs.createReadStream('note.txt')
    rstream.pipe(res)

})

server.listen(port, () => console.log(`Server is listen at http:localhost:${port} `))
