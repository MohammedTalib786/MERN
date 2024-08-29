const path = require('path')

const notes = 'data/text.txt';

let x = path.dirname(notes); // /users/joe
let y = path.basename(notes); // notes.txt
let z = path.extname(notes); // .txt

console.log(x, y, z)
