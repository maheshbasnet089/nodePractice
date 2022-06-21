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
// const stream = require("stream");
// let converter = new stream.Transform();

// converter._transform = function (num, encoding, cb) {
//   this.push(String.fromCharCode(new Number(num)) + "\n");
//   cb();
// };

// process.stdin.pipe(converter).pipe(process.stdout);

//fetches the html page of example.org
// const http = require("http");
// http
//   .request(
//     {
//       host: "www.maheshbasnet.info.np",
//       method: "GET",
//       path: "/",
//     },
//     function (response) {
//       response.setEncoding("utf8");
//       response.on("readable", () => console.log(response.read()));
//     }
//   )
//   .end();

// const http = require("http");
// const server = new http.Server();

// server.on("request", (request, socket) => {
//   console.log(request.url);
//   http
//     .request(
//       {
//         host: "www.google.com",
//         method: "GET",
//         path: "/",
//         port: 80,
//       },
//       (response) => response.pipe(socket)
//     )
//     .end();
// });

// server.listen(8080, () =>
//   console.log("Proxy server listening on localhost:8080")
// );

//COOKIE CREATION
// const http = require("http");
// const url = require("url");
// http
//   .createServer((request, response) => {
//     let cookies = request.headers.cookie;
//     if (!cookies) {
//       let cookieName = "session";
//       let cookieValue = "123456";
//       let numberOfDays = 4;
//       let expiryDate = new Date();
//       expiryDate.setDate(expiryDate.getDate() + numberOfDays);

//       let cookieText = `${cookieName}=${cookieValue};expires=${expiryDate.toUTCString()};`;
//       response.setHeader("Set-Cookie", cookieText);
//       response.writeHead(302, { Location: "/" });
//       return response.end();
//     }

//     cookies.split(";").forEach((cookie) => {
//       let m = cookie.match(/(.*?)=(.*)$/);
//       cookies[m[1].trim()] = (m[2] || "").trim();
//     });

//     response.end(`Cookie set: ${cookies.toString()}`);
//   })
//   .listen(8080);

//file --brief --mime filename => TO see the mime type of the file in UNIX
// app.listen(8080, () => {
//   console.log("server started");
// });
