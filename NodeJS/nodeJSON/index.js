let obj = {
    name: "Talib",
    Age: 20,
    address: "Kurla"
}


console.log('This is an Object \n', obj)
let jsonConv = JSON.stringify(obj)

console.log('This is an Object Converted in JSON \n', jsonConv)

let objConv = JSON.parse(jsonConv)
console.log('This is a JSON Converted in Object \n', objConv)

// we can see the difference that the json got also double quotes in the keys also


