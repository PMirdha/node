var websocketserver = require('websocket').server;
var CustomWebSocket = function(http_server){
    var wsServer = new websocketserver(http_server);
    var connection = null;
    var event_callbacks = {};

    this.bind = function(event_name, callback){
        event_callbacks[event_name] = event_callbacks[event_name] || [];
        event_callbacks[event_name].push(callback);
    };

    wsServer.on("request", function(req){
        connection = req.accept(null, req.origin);
        console.log("New connection request accepted1");
        connection.on("message", function(message){
            console.log("New message", message.data);
            var json_data = JSON.parse(message);
        });
        connection.on("connect", function(conn){
            console.log("Connection formed for - ", conn.remoteAddress);
        });

        connection.on("close", function(conn){
            console.log("Connection closed for - ", conn.remoteAddress);
        });
    });

    var dispatch = function(event_name, callback){
        var callbacks = event_callbacks[event_name];
        if(typeof callbacks == 'undefined')
        {
            return;
        }
        for(var i=0; i<callbacks.length; i++)
        {

        }
    };
};

module.exports = CustomWebSocket;