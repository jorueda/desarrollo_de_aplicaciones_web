import React from 'react';

const APIURL = (recurso = null) =>
    new URL(`https://pokeapi.co/api/v2/${ recurso || '' }`);

export const Listado = async (params = {offset:0, limit:20}) => {
    const recurso = APIURL('pokemon');
    recurso.search = new URLSearchParams(params).toString(); // añade query string
    const resultados = await fetch(recurso);
    return resultados.json();
}

export const Detalle = async(recurso) => {
    const resultados = await fetch(recurso);
    return resultados.json();
}