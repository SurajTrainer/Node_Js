
const EventEmitter = require('events');

const customEmitter =  new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`hey i am events data... with name -${name} , and id : ${id}`);
})

customEmitter.on('response', () => {
    console.log(`hey i am events 2nd time logic  data...`);
})

customEmitter.emit('response','rakesh', 34)
