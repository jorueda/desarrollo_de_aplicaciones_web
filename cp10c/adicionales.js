'use strict';

function dividir(a,b) {
    if(isNaN(a) || isNaN(b)) return "NA";
    else if(b===0) return "Undef";
    else return a/b;
}

const usuarios = {'usr':'ntorres', 'cla': '123'};

function loginOk(usr, cla) {
    try {
        if(usr === usuarios.usr && cla === usuarios.cla)
            return 200;
        else
            return 404;
    } 
    catch (error) {
        return 404;
    }
}

// Se ecarga de exportar
// exports.alias = nombre funcion a exportar
exports.o1 = dividir
exports.loginvalido = loginOk