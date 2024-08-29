const path = require('path')

console.log('Path Directory:', path.dirname('C:/Users/user/Desktop/NodeJS/2-sept/pathMod.js'))

console.log('Path Extension:', path.extname('C:/Users/user/Desktop/NodeJS/2-sept/pathMod.js'))

console.log('Path Basename:', path.basename('C:/Users/user/Desktop/NodeJS/2-sept/pathMod.js'))

const Path = path.parse('C:/Users/user/Desktop/NodeJS/2-sept/pathMod.js')

console.log(Path.root);
console.log(Path.ext);
console.log(Path.name);
