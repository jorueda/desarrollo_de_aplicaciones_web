// Este es un ejemplo de un servidor con express
'use strict';
const pru18 = require('express');
const app = pru18();
// Seconstruyen las rutas de atención
app.use('/', (pet, res) => res.send('<h1>Hola a todos</h1>'));
app.get('/login', (pet, res) => res.send('<h2>Solicitaste iniciar sesión</h2>'));
app.get('/logout', (pet, res) => res.send('<h2>Solicitaste cerrar sesión</h2>'));
// Se coloca el servidor en escucha
app.listen(8080, () => console.log("El servidor arrancó en el puerto 8080"));