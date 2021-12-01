// Levantar un servidor HTTP
// Adicionar funcionalidades a dicho servidor desde un archivos externo
//   ==> Se utiliza manejadores de excepciones para "fallar" en modo seguro.
//   ==> Permitirá demostrar el concepto de Simulación de API.
'use strict';
const http = require('http');
const adic = require('./funciones.js');

function atender(pet, res) {
    console.log('Se recibe solicitud');
    try {
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8;'}); 
        res.write('<h1>Esta es una prueba de extensión de funcionalidades</h1>');
        res.write('<h2> "A" / "B" = '+adic.prueba("A","B")+'</h2>');
        res.write('<h2> "A" / 5 = '+adic.prueba("A",5)+'</h2>');
        res.write('<h2> 8 / "B" = '+adic.prueba(8,"B")+'</h2>');
        res.write('<h2> 8 / 3 = '+adic.prueba(8,3)+'</h2>');
        res.write('<h2> 4 / 0 = '+adic.prueba(4,0)+'</h2>');
        res.write('<h2> 0 / 4 = '+adic.prueba(0,4)+'</h2>');
        res.write('<h2> cambiarclave("ntorres", "123", "456") = '+adic.api_clave('ntorres', '123', '456')+'</h2>');
        res.write('<h2> cambiarclave("ntorres", "123", "123") = '+adic.api_clave('ntorres', '123', '123')+'</h2>');
        res.end();
    } 
    catch (error) {
        res.writeHead(500,{'Content-Type':'text/html; charset=utf-8;'}); 
        res.end('<h1>Algo falló</h1>');  
        console.log(error);
    }
}

const server = http.createServer(atender);

server.listen(8080);