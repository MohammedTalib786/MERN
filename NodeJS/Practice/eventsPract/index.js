const EventEmitter = require('events')
const events = new EventEmitter()

events.on('myData', () => {
    console.log('This is myData readable Events');
})

events.on('yourData', () => {
    console.log('This is yourData readable Events');
})

events.on('callBack', (head, stat) => {
    console.log(`This is callBack Event this is HEad ${head} and this is the Status ${stat}.`);
})


events.emit('myData')

events.emit('callBack', 'HTML', 200)