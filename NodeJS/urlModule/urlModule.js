console.log('URL Module');

import url from 'url';

const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log('The URL: ' + myURL)
console.log('The href of URL: ' + myURL.href)
console.log('The port of URL: ' + myURL.port)

console.log(myURL)