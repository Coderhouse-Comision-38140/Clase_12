let socket = io.connect(); 

socket.on('mensajes', function(data) { 
    console.log(data);
    document.querySelector('p').innerText = data
});

let input = document.querySelector('input')
input.addEventListener('input', () => {
    socket.emit('mensaje', input.value); 
})

