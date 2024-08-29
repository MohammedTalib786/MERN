const fs = require('fs');

fs.writeFile('data/textWrite.txt', 'This Data will be Put in The Second txt File', (err, data)=>{
    console.log(err, data)
    // console.log(err, data)
})

fs.writeFileSync('data/textWrite2.txt', 'The Data will be Put in The File Second Time!');
let x = fs.writeFileSync('data/textWrite3.txt', 'The Data will be Put in The File Third Time!');

console.log(x)
