const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.static('public'));

io.on('connection', socket => {
    console.log('Nuevo cliente conectado!');

    socket.on('mensaje', data => {
        io.sockets.emit('mensajes', data); 
    });  
});

const PORT = 8080
const srv = server.listen(PORT, () => { 
    console.log(`Servidor Http con Websockets escuchando en el puerto ${srv.address().port}`);
})
srv.on('error', error => console.log(`Error en servidor ${error}`))
