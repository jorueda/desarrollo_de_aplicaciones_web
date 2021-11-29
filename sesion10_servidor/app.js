// Se encargará de levantar un WEB server y agregar algunas funcionalidades
"use strict";  // Queremos que aplique reglas estrictas 

const http = require("http");        // Incorpora objetos del tipo http
const func = require('./funciones'); // Incorporar un objeto del tipo funciones

const server = http.createServer(function(pet, res) {
    try {
        const resul = func.suma(5,10);
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write("<h1>Hola mis queridos jovenes: "+resul+"</h1>");
        res.write("<h2>C&oacute;digo : "+func.prueba1()+"</h2>");
        res.write("<h2>Nombre : "+func.prueba2()+"</h2>");
        res.end();   // Importante, si no se coloca el cliente se queda en espera inficina
        console.log(pet.url);
    } 
    catch (error) {
        res.writeHead(500, {'Content-Type' : 'text/plain'});
        res.end("ERROR : Algo salió mal");
    }
});   // La rutina que atiene las peticiones al servidor

server.listen(8080);  // Se coloca el servidor a escuchar