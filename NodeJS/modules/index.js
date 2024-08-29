import * as fs from 'fs'

fs.writeFile('file.txt', 'This is the Content', (err, data)=> {
    console.log(err, data)
})

