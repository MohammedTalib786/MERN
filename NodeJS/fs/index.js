
// create a folder
// create a file in it named bio.txt and data into it
// Add more data into the file at the end of the existing data 
// read the data without getting buffer data at first
// rename the file name to mybio.txt
// now delete both the file and the folder

// Used ASynchrounous way
// console.log(2)

const fs = require('fs')

// fs.mkdir('./Talib', function (err) { console.log(err) })

// fs.writeFile('./Talib/bio.txt', 'Hello Wordl!', (err, data) => {
//     console.log(err, data)
// })

// fs.appendFile('./Talib/bio.txt', '\nMy name is Talib', (err, data) => {
//     console.log(err, data)
// })

// fs.readFile('./Talib/bio.txt', 'utf-8', (err, data) => {
//     /*console.log(err)*/
//     console.log(data)
// })

// fs.rename('./Talib/bio.txt', './Talib/myBio.txt', (err, data) => {
//     console.log(err, data)
// })



// Delete File

// fs.unlink('./Talib/myBio.txt', (err, data)=>{
//     console.log(err, data)
// })


// Delete Folder

// fs.rmdir('./Talib', (err, data) => {
//     console.log(err, data)
// })
