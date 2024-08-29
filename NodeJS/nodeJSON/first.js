const fs = require('fs')
let obj = {
    name: 'Shaikh Mohammed Talib',
    age: 20,
    address: 'Kurla'
}

// console.log(obj);

// first task
let toJson = JSON.stringify(obj)
console.log('JSON \n', toJson);


// second task
// fs.writeFile('second.json', toJson, (err) => {
//     console.log('done');
// })


// Third task
// fs.readFile('second.json', 'utf-8', (err, data) => {
//     console.log('reading file');
//     console.log(data);
//     console.log('file read!');
// })

// Fourth and fifth task
let toObj = JSON.parse(toJson)
console.log('object \n', toObj);

