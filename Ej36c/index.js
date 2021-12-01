// Demostrará el concepto de async/await para resolver la 
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
const leerArchivo = async () => {
    // Se simula el exito o el fracaso de forma aleatoria
    const tieneError = Math.random() > 0.9;
    if (tieneError) throw new Error({'message':'No data found'});
    else {
        console.log("Inicia lectura del archivo");
        await delay(2000); // Simulando la lectura del archivo y que va a demorar 2 segundos
        const data = {'id':1010,'nombre':'NATC'};
        console.log("Finaliza lectura del archivo");
        return data
    }
};

// Esta simula el envío de una solicitud HTTP
//   ==> Diseñada para operar de forma asincrona
const envioHTTP = async (data) => {
    // Se simula el exito o el fracaso de forma aleatoria
    const tieneError = Math.random() > 0.9;
    if(tieneError) throw new Error({'status':500,'message':'internal server error'});
    else {
        console.log("Inicia solicitud HTTP");
        const resp = {'status':'200','message':'Ok'};
        await delay(1000); 
        console.log("Finaliza solicitud HTTP");
        return resp;
    }
};

// Esta simula la escrittura sobre un archivo
//   ==> Diseñada para operar de forma asincrona
const escribirArchivo = async (response) => {
    // Se simula el exito o el fracaso de forma aleatoria
    const tieneError = Math.random() > 0.9;
    if(tieneError) throw new Error({'status':'500', 'message':'Data written error'});
    else {
        console.log("Inicia escritura de archivo");
        const data = {'status':'200','message':'Ok'};
        await delay(3000);
        console.log("Finaliza escritura de archivo");
        return data;
    }
};

// Se crea una rutina que espera de forma asincrona el tiempo especificado
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Ejecución de código

const ejecutar = async() => {
    try {
        const data = await leerArchivo();
        const resp = await envioHTTP(data);
        const resu = await escribirArchivo(resp);
        console.log(resu);
        console.log('Proceso finalizado');
    } 
    catch (error) {
       console.log(error);
    }
}

ejecutar();
