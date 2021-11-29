function suma(a,b) {
    return a+b;
}

function resta(a,b) {
    return a-b;
}

const articulo = {
    "cod" : "2025",
    "nom" : "Prueba 25",
    "pco" : "200",
    "pve" : "400",
    "smi" : "10",
    "sma" : "50"
};

function getCodigo() {
    return articulo.cod;
}

function getNombre() {
    return articulo.nom;
}

exports.suma = suma;
exports.resta = resta;

exports.prueba1 = getCodigo;
exports.prueba2 = getNombre;