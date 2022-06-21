///stream practice ;

//opening telnet service and connecting to that server with telnet client => telnet 127.0.01 8080
//acts a communication sytem between two ends .
const stream = require("stream");
const net = require("net");

net
  .createServer((socket) => {
    socket.write("Go ahead and type something!");
    socket.setEncoding("utf8");
    socket.on("readable", function () {
      process.stdout.write(this.read());
    });
  })
  .listen(8080);
