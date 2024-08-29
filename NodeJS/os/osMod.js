const os = require('os')

console.log(`Os Arch: ${os.arch()}`)

console.log(`Os Free Memory: ${os.freemem()}`)

console.log(`Os Free Memory in GB: ${os.freemem() / 1024 / 1024 / 1024}`)

console.log(`Os Total Memory: ${os.totalmem()}`)

console.log(`Os Total Memory in GB: ${os.totalmem() / 1024 / 1024 / 1024}`)

console.log(`Os Platform: ${os.platform()}`)

console.log(`Os Version: ${os.version()}`)

console.log(`Os Home Directory: ${os.homedir()}`)

console.log(`Os Type: ${os.type()}`)

console.log(`Os Temp Directory: ${os.tmpdir()}`)

console.log(`Os Host Name: ${os.hostname()}`)

console.log('Os User Info:')
console.log(os.userInfo())

