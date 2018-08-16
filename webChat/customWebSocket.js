

var websocketserver = require('websocket').server;

var  CustomWebSocket = function(http_server){
    var wsServer = new websocketserver(http_server)

    var event_callbacks = {}

    this.bind = function(event, callback){

    };

    wsServer.on("message", function(evt){
        var json_data = JSON.parse(evt.data)

    });


};