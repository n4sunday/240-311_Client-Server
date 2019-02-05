var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var NUMBER = 0;
var COUNT = 0;
var client = new net.Socket();
client.connect(PORT, HOST, function() {
   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
   client.write('5935512004');
});

client.on('data', function(data) {
    if(COUNT>=5){
        client.destroy();
    }
    else if(data=='OK'){
        console.log('OK')
        console.log('Client -----> '+NUMBER)
        client.write(''+NUMBER);
        NUMBER++
        COUNT++
    }
    else if(data=='WRONG'){
        console.log('WRONG')
        client.write(''+NUMBER);
        console.log('Client -----> '+NUMBER)
        NUMBER++
        COUNT++
    }
    else if(data=='BINGO'){
        console.log('BINGO')
        console.log('Client -----> '+NUMBER)
        console.log(''+COUNT)
        client.destroy();
    }
   //console.log('DATA: ' + data);
  // client.destroy();
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
   console.log('Connection closed');
});
