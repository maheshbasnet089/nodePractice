///stream practice ;
const app = require("express")();

//duplex streams
//opening telnet service and connecting to that server with telnet client => telnet 127.0.01 8080
//acts a communication sytem between two ends .
// const stream = require("stream");
// const net = require("net");

// net
//   .createServer((socket) => {
//     socket.write("Go ahead and type something!");
//     socket.setEncoding("utf8");
//     socket.on("readable", function () {
//       process.stdout.write(this.read());
//     });
//   })
//   .listen(8080);

//convert ASCII (American Standard Code for Information Interchange) codes into ASCII characters
const stream = require("stream");
let converter = new stream.Transform();

converter._transform = function (num, encoding, cb) {
  this.push(String.fromCharCode(new Number(num)) + "\n");
  cb();
};

process.stdin.pipe(converter).pipe(process.stdout);

app.listen(8080, () => {
  console.log("server started");
});
