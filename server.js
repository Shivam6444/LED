var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var userCount = 0;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
  console.log('a user connected');
  userCount++;
  io.emit('userCount', userCount);
  
  socket.on('disconnect', function(){
    userCount--;
    console.log('user disconnected');
  });

  socket.on('1', function(msg){
    io.emit('1', msg);
    console.log('message: ' + msg);
  });
  socket.on('2', function(msg){
    io.emit('2', msg);
    console.log('message: ' + msg);
  });

  socket.on('player', function(msg){
    io.emit('player', msg);
    console.log('player: ' + msg);
  });
  socket.on('player2', function(msg){
    io.emit('player2', msg);
    console.log('player2: ' + msg);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
