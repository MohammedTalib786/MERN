import {obj} from "./sec.mjs"

import random from "./sec.mjs"  // defaul function greet()

import { arr1, arr2 } from "./sec.mjs"

import * as a from 'fs' // * used for universal

import url from 'url'

console.log('Hello World!')

console.log(obj)
console.log(random)

console.log(arr1)
console.log(arr2)

// console.log(a)

let x = a.writeFileSync('text.txt', 'I will Write from Here...')
console.log(x)

const myURL = new URL('https://example.org:8000');

myURL.pathname = 'a/b';
myURL.search = '?d=e';
myURL.hash = '#fgh'

// console.log(myURL)
console.log(myURL.pathname)
console.log(myURL.search)
console.log(myURL.hash)
console.log(myURL.port)
console.log(myURL.href)