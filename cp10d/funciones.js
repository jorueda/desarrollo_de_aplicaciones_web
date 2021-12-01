function dividir(a,b) {
    try {
        if(isNaN(a) || isNaN(b)) return "Datos no validos";
        else if(b===0) return "Indefinido";   
        else return a/b;
    } 
    catch (error) {
        return "ERROR: algo no funcionó";
    }
}

// Se simulará el recurso de la API para el cambio de contraseña
// Quemar en el código datos
const datos = {'act' : '123', 'usr':'ntorres'};

// Función que simula el comportamiento de la API
function cambiarclave(usr, cla, ncl) {
    // Validaciones
    if(usr.length===0 || cla.length===0 || ncl.length===0)
        return 409;  // Significa que no se suministraron todos los datos
    else if (usr!== datos.usr || cla !== datos.act)
        return 410;  // Significa que el usuario y la clave suministrada no corresponden
    else if (cla===ncl)
        return 411;  // La clave actual y la anterior son la misma
    else 
        return 200;
}

// Se exporta la función para que pueda utilizarse desde fuera
exports.prueba = dividir
exports.api_clave = cambiarclave