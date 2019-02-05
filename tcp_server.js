var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;
let answer=Math.floor(Math.random() * 21)
net.createServer(function(sock) {
    console.log('Answer : '+answer);
    
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   var COUNT = 5;
   sock.on('data', function(data) {
       //console.log('DATA ' + sock.remoteAddress);
       if(COUNT==0){
           sock.destroy()
       }
       //sock.write('OK "' + data + '"');
       else if(data=='5935512004'){
            sock.write('OK')
            console.log('Client -----> '+data)
            console.log('OK <----- Server')
            
       }
       else if(data==''+answer){
            sock.write('BINGO')
            console.log('Client -----> '+data)
            console.log('BINGO <----- Server')
            sock.destroy()
            
       }
       else if(COUNT>=0){
        
            sock.write('WRONG')
            console.log('Client -----> '+data)
            console.log('WRONG <----- Server')
            COUNT-- 
       }
   });

   
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);