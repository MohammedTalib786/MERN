// console.log(2);

const EventEmitter = require('events')

const event = new EventEmitter()
const event2 = new EventEmitter()
const event3 = new EventEmitter()

/*
event.on('hello', () => {
    console.log('Hello World! First type we can trigger event ');
})

event.emit('hello')


event2.on('trigger', () => {
    console.log('i am second type of event');
})

event2.on('trigger', () => {
    console.log('i am second type of event which says that many events can be triggered at Once');
})

event2.on('trigger', () => {
    console.log('i am second type of event');
})

event2.on('trigger', () => {
    console.log('i am second type of event');
})

event2.emit('trigger')
*/

/*
event3.on('click', (statusCode, message) => {
    console.log('This is the third type an event can be trigger');
})

event3.on('click', (statusCode, message) => {
    console.log(`In which we can pass parameters:\nThe StatusCode is ${statusCode} and the site is ${message} `);
})

event3.emit('click', '200', 'ok')
*/
