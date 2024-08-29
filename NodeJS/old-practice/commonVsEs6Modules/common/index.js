const fs = require('fs');

let x = fs.readFileSync('text.txt', 'utf-8');
console.log(x)

const secc = require('./sec');

secc()
