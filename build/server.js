"use strict";
// const http = require("http"); //same => import http from "http"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//create a server object:
// http.createServer(function (req, res) {
//     if (req.method === "GET" && req.url === "/hello") {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('Hello World!!!!'); //write a response to the client
//         res.end(); //end the response
//     } else {
//         res.statusCode = 404;
//         res.end();
//     }
// }).listen(3000, () => {
//     console.log("server run on http://localhost:3000/hello")
// }); //the server object listens on port 8080
// server.listen(3000,)
const app_1 = __importDefault(require("./app"));
app_1.default.listen(3000, () => {
    console.log("server run on http://localhost:3000/hello");
}); //the server object listens on port 8080
