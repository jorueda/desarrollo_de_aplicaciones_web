"use strict"
const prompt = require("prompt");
const server = require('http'); // Crea el objeto
prompt.start();

async function leerDato() {
    await prompt.get(["nombre"], (err, result) => {
        console.log("Hola "+result.nombre+". ¿Cómo te va?")
    })
}

// leerDato();

// Definir las propiedades y levantar el servidor
server.createServer((pet, res) => {
    console.log("Se recibe petición")
    res.writeHead(200, {'Context-Type': 'text/plain'});
    res.write("Hola mundo");
    res.end();
}).listen(8080);
