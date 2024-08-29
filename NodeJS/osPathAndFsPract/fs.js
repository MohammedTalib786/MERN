console.log('File System')

const fs = require('fs');

// Comment and Uncommment to see the changes

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(`Error: ${err}. Data: ${data}`)
// })


// fs.readFile('fsile.txt', 'utf8', (err, data) => {
//     console.log(`Error: ${err}. Data: ${data}`)
// })



// const a = fs.readFileSync('file.txt')
// console.log(a)
// console.log(a.toString())
// console.log('File Reading Finished')

// fs.writeFile('file2.txt', 'The Data of File 2 fs', (err, data)=>{
//     console.log(`The Error: ${err}. The Data ${data}.`)
// })

const b = fs.writeFileSync('file2.txt', 'This data will be Updated')
console.log(b)


