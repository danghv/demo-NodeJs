const fs = require('fs')
const rs = fs.createReadStream('./files/demo.txt')
const events = require('events')
var eventEmitter = new events.EventEmitter()
//create an event handle
const myEventHandle = () => {
    console.log('I hear a scream')
}
//assign an event handle to an event
eventEmitter.on('tieng la het', myEventHandle)

eventEmitter.emit('tieng la het')

rs.on('open', () => {
    console.log('file opened!')
})
