//net-child.net
process.on("message", function(message, server) {
  console.log(message);
  server.on("connection", function(socket) {
    console.log('hello');
    socket.end("Child handled connection\n");
  })  
});
