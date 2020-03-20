const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

server.listen(8000);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

const connectionsList = {};
let clientData = {}
let clientID = {}

io.on('connection', (socket) => { 
    console.log('user connected: ' + socket.id);
    console.log(socket.client.conn.server.clientsCount);

    socket.on('getUserName', (userName, ID) => {
        console.log("username got from event: "+ userName + ID);
        clientData[userName] = ID;
    });   

    socket.on('join', function (userName, roomName) {
        console.log("Join Room Event: "+ JSON.stringify(userName));

        roomName = roomName || userName;
        // if (!connectionsList[roomName]) {
        //     connectionsList[roomName] = socket.id;
        // }
        // var room = io.sockets.adapter.rooms[roomName].length;
        // console.log(`Number of user in room ${roomName} is ${room}`);

        var clients = io.sockets.clients('room'); // number of client in room
        
        console.log("Room Name: " + roomName)
        socket.join(roomName);
    });

    
    socket.on('on-send', (data) => {
        console.log("On send data: " + JSON.stringify(data));

        // io.sockets.in("Agent").emit('on-send', data);

        io.to(clientData[data.message.userName]).emit("on-send", data);
        io.to(clientData[data.message.receiverName]).emit("on-send", data);

        // io.emit("on-send", data)
    });
});

