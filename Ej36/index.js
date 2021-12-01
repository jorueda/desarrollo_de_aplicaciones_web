// Este ejemplo demuestra las funcionalidades de la emisión y atención de 
// eventos
'use strict';
const http = require('http');
const ee = require('events');
const emiter = new ee();

// Colocar en escucha por un evento :: login
emiter.on('login', (res) => { 
    try {
        console.log('Solicitaste login'); 
        res.write('<h2>LOGIN</h2>')
    } 
    catch (error) {
        console.log(error);
    }
});

// Colocar en escucha por un evento :: prueba
emiter.on('prueba', (res) => { 
    try {
        console.log('Esta es una prueba'); 
        res.write('<h2>PRUEBA</h2>')
    } 
    catch (error) {
        console.log(error);
    }
});


http.createServer((pet, res) => {
    try {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8;'})
        if(pet.url==='/login')
            emiter.emit('login', res);
        else if(pet.url==='/prueba')
            emiter.emit('prueba', res);
        res.end("<h1>Recibo petición</h1>");
    } 
    catch (error) {
        res.writeHead(500, {'Content-Type':'text/html; charset=utf-8;'})
        res.end("<h1>Algo falló</h1>");
        console.log(error); 
    }
}).listen(8080);