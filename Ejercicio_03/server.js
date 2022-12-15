const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const mensajes = []

app.use(express.static('public'));

io.on('connection', socket => {
    console.log('Nuevo cliente conectado!');
    
    /* Envio los mensajes al cliente que se conectó */
    socket.emit('mensajes', mensajes);

    /* Escucho los mensajes enviado por el cliente y se los propago a todos */
    socket.on('mensaje', data => {
        mensajes.push({socketid: socket.id, mensaje: data})
        io.sockets.emit('mensajes', mensajes); 
    });  
});

const PORT = 8080
const srv = server.listen(PORT, () => { 
    console.log(`Servidor Http con Websockets escuchando en el puerto ${srv.address().port}`);
})
srv.on('error', error => console.log(`Error en servidor ${error}`))
