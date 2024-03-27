// const {log} = require('./logger');

// log('message');
// // console.log(logger);

// -------PATH MODULE


// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// -------OS MODULE


// const os = require('os');
// var totalmem = os.totalmem();
// var freemem = os.freemem();

// console.log(`Total Memory: ${totalmem}`);
// console.log(`Free Memory: ${freemem}`);

// -------FILE SYSTEMS MODULE


// const fs = require('fs');

// const files = fs.readdirSync('./');

// console.log(files);

// fs.readdir('./', function(err,files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// -------EVENTS MODULE

// class
// const EventEmitter = require('events');
// // object
// // const emitter = new EventEmitter();


// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener for an event
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });

// // Raise an event
// logger.log('message');


// -------HTTP MODULE

// const http = require('http');
// // creates a server and acts like an event emitter
// const server = http.createServer((req, res)=> {
//     if (req.url === '/'){
//         res.write('Hello World');
//         res.end();
//     }

//     if (req.url === '/api/courses'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });

// // server.on('connection', (socket) => {
// //     console.log('New connection...');
// // });

// server.listen(3000);

// console.log('Listening on port 3000...');