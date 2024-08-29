console.log('Event Module in js')



const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('WaterFall', () => {
    console.log('Turn Off the Motor.');
    setTimeout(() => {
        console.log('Please Turn Off the Motor! Its a gentle Reminder')
    }, 4000)

});


myEmitter.emit('WaterFall');

console.log('The Script is Running Till Now!')
