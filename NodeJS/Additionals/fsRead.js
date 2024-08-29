const fs = require('fs');

fs.readFile('data/text.txt', (err, data)=>{
    console.log(err, data)
    console.log(err, data.toString())
})

let a = fs.readFileSync('data/text.txt', 'utf-8');
console.log(a)

