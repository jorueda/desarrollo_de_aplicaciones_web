// Demostrará el concepto de promises para resolver la 
// siguiente situación:
// 1.   Se dispara un evento
// 2.   Se solicita la lectura de un archivo [asincrona]
// 3.   Al terminar la lectura del archivo , se realiza una peticion 
//      HTTP [asincrona]
// 4.   Cuando se responda la petición http, se escribe sobre el archivo 
//      [asincrona]
'use strict';

// Se encarga de leer un archivo [Simulada] 
//   ==> Diseñada para operar de forma asincrona
const leerArchivo = () => new Promise ((resolve, reject) => {
    // Se simula el exito o el fracaso de forma aleatoria
    const tieneError = Math.random() > 0.9;
    if (tieneError) reject({'message':'No data found'});
    else {
        console.log("Inicia lectura del archivo");
        setTimeout(()=>resolve({'id':1010,'nombre':'NATC'}), 2000); // Simulando la lectura del archivo y que va a demorar 2 segundos
        console.log("Finaliza lectura del archivo");
    }
});

// Esta simula el envío de una solicitud HTTP
//   ==> Diseñada para operar de forma asincrona
const envioHTTP = (data) => new Promise((resuelta, rechazada) => {
    // Se simula el exito o el fracaso de forma aleatoria
    const tieneError = Math.random() > 0.9;
    if(tieneError) rechazada({'status':500,'message':'internal server error'});
    else {
        console.log("Inicia solicitud HTTP");
        setTimeout(()=>resuelta({'status':'200','message':'Ok'}), 1000); // Simulando la lectura del archivo y que va a demorar 2 segundos
        console.log("Finaliza solicitud HTTP");
    }
});

// Esta simula la escrittura sobre un archivo
//   ==> Diseñada para operar de forma asincrona
const escribirArchivo = (data) => new Promise((success, error) => {
    // Se simula el exito o el fracaso de forma aleatoria
    const tieneError = Math.random() > 0.9;
    if(tieneError) error({'status':'500', 'message':'Data written error'});
    else {
        console.log("Inicia escritura de archivo");
        setTimeout(()=>success({'status':'200','message':'Ok'}), 3000); // Simulando la lectura del archivo y que va a demorar 2 segundos
        console.log("Finaliza escritura de archivo");
    }
});

// Encadenamiento de promesas
leerArchivo()
    .then((data) => envioHTTP(data))
    .then((response) => escribirArchivo(response))
    .then(console.log('El archivo fue escrito'))
    .catch((error) => console.log(error));
