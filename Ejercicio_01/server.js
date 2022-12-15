const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.static('public'));

io.on('connection', function(socket) {
    console.log('Nuevo cliente conectado!');
});

const PORT = 8080
const srv = server.listen(PORT, function() { 
    console.log(`Servidor Http con Websockets escuchando en el puerto ${this.address().port}`);
})
srv.on('error', error => console.log(`Error en servidor ${error}`))
