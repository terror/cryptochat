var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 5000;

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

http.listen(port, () => {
    console.log(`Listening on ${port}`);
});
