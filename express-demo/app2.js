const EventEmitter = require('events');
const event = new EventEmitter();

event.on('greet',() =>{
    console.log('Hello ,this is an email');

});
event.emit('greet');