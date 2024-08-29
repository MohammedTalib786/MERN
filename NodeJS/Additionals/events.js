console.log('The Script is Running!');

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('It has Started')
    setTimeout(() => {
        console.log('Time to Conclude!');
    }, 3000)
});

eventEmitter.emit('start')

console.log('The Script is still Running!');