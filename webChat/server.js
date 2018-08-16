
var websocketserver = require('websocket').server;
var express = require('express');
var http = require('http')

var server = http.createServer()

server.listen(8080)

var app = express();

app.get('/', function(req, resp){
    resp.sendfile('client.html')
});

app.listen(8081);

var wsServer = new websocketserver({
    httpServer: server
});

var count = 0








wsServer.on("request", function(req){
    count ++;
    console.log("count  = ", count);
    var connection = req.accept(null, req.origin);
    // console.log(connection)
    console.log("new connection from - ", connection.remoteAddress);
    connection.sendUTF("Hello");
});

wsServer.on("close", function(con){
    count --;
    console.log("Connection closed with - ", con.remoteAddress);
});

wsServer.on("hello", function(mesg){
    console.log("Hello function received");
});



