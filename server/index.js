const http = require('http').createServer();
// const io = require('socket.io')(http);

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        console.log(message);
        // socket.broadcast.emit('message', message);
        io.emit('messge', `${socket.id.substr(0, 2)} said ${message}`);

    });

});

http.listen(5500, () => console.log('listening on port 5500'));

