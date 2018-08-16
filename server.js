var WebSocketServer = require('websocket').server;
var http = require('http');


var server = http.createServer(function(request, response){
});


server.listen(8080, function(){
    console.log("Server is listening on 8080")
});

wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function(request){
    var connection = request.accept(null, request.origin);
    console.log("new websocket connection stablished")
    console.log(connection.remoteAddress)
    connection.sendUTF("Hello");
    wsServer.on('message', function(message){
        console.log("new message")
        connection.sendUTF(message);
    });
    wsServer.on('close', function(connectionself){
        console.log(connection.remoteAddress + " disconnected")
    });
});



