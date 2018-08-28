
var websocketserver = require('websocket').server;
var express = require('express');
var http = require('http');
CustomWebSocket = require('./customWebSocket');

var server = http.createServer()

server.listen(8080)

var app = express();

app.get('/', function(req, resp){
    resp.sendfile('client.html')
});

app.listen(8081);

var wsCustomServer = new CustomWebSocket({
    httpServer: server
});


wsCustomServer.bind("publish", function(self, data){
    console.log("publish msg to everyone")
    console.log(self.connection)
});