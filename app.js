// function sayHello(name){
//     console.log("Good morning" + " " + name)
// }
// sayHello("Hari");

// console.log(module);

// console.log(__filename)
// const log = require('./log');

// log('asa');


// const path = require('path');

// var pathObj =path.parse(__filename, __dirname);

// console.log(pathObj);



// const os = require('os')

// var tataoMem = os.totalmem();

// var freeMen = os.freemem();

// console.log(tataoMem);
// console.log(freeMen);



// const fs = require('fs');
// // var file = fs.readdirSync('./');
// // console.log(file);
// fs.readdir('./',function(err, file){
//     if(err)
//      console.log(err);
//     else(file)
//      console.log(file);
// })


// const EventEmitter = require('events');
// const emitter = new EventEmitter;

// emitter.on('messagelog', (arg) =>{
//     console.log('listner called', arg)
// });
// emitter.emit('messagelog', {id:1, url:'http://'});


// const http = require('http');

// const server = http.createServer();

// server.on('connection', (stream)=>{
//     console.log('listening to port');
// })
// server.listen(5000);

// console.log('listening to 5000...');



const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.write('Request recieved');
        res.end();
    }
});

server.listen(5000);
console.log('listening to port');
