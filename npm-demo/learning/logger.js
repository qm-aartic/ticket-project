// class
const EventEmitter = require('events');
// object


var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://www.a.com'})
    }
}

module.exports = Logger;
