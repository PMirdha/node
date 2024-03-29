var websocket_connection = null

$(document).ready(function(){
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    $("#connect").click(function(){
        console.log("clicking connect button")
        websocket_connection = new WebSocket('ws://localhost:8080');
        websocket_connection.onopen = function(evt) { onOpen(evt) };
        websocket_connection.onclose = function(evt) { onClose(evt) };
        websocket_connection.onmessage = function(evt) { onMessage(evt) };
        websocket_connection.onerror = function(evt) { onError(evt) };
        // websocket_connection.close();
    });
    $("#disconnect").click(function(){
        if (websocket_connection.readyState === WebSocket.OPEN) {
            websocket_connection.close();
         }
        else
        {
            alert("connection not in ready state - "+websocket_connection.readyState);
        }
    });
});


function onOpen(evt) {
    writeToScreen("Connection opened");
}

function onClose(evt) {
    writeToScreen("Connection Closed");
}

function onMessage(evt) {
    $("#msg_history").append(evt.data);
}

function onError(evt) {
    alert(evt.data)
}

function writeToScreen(params) {
    console.log(params)
}

function doSend(message) {
    websocket_connection.send(message)
    console.log("Sent")
}





