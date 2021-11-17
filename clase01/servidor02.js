// Se encarga de crear un objeto para el servidor Web.
let http = require('http') // Acceder al modulo http

// Se encarga de manejar las peticiones (Request Handler)
let manejador = function(peticion, respuesta) {
    console.log("Recibo una petición ")
    respuesta.end("Se envía la respuesta")
}

let server = http.createServer(manejador)
server.listen(8080)
console.log("El servidor se encuentra activo")