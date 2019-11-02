const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  
    res.end('Welcome to chat server');
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  socket.emit('newMessage',  'welcome' );
  socket.on('sendMessage', function(msg){
    console.log(msg);
    socket.emit('newMessage',  msg );
  });
});

// now that server is running
server.listen(81, '127.0.0.1', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('http://127.0.0.1:81')
  }


});