// Se encargará de colcoar en escucha un servidor WEB en el puerto 5000
"use strict";
const http = require('http');
const adic = require('./adicionales.js');

http.createServer(function (req, res) {
    try {
        res.writeHead(200,{ 'Content-Type':'text/html; charset=utf-8' });
        res.write("<h1>Cp10c. Adicion de funcionalidades a WEB server</h1>");
        res.write("<h3> A / B = "+adic.o1('A','B')+"</h3>");
        res.write("<h3> A / 5 = "+adic.o1('A',5)+"</h3>");
        res.write("<h3> 5 / B = "+adic.o1(5,'B')+"</h3>");
        res.write("<h3> 5 / 2 = "+adic.o1(5,2)+"</h3>");
        res.write("<h3> 5 / 0 = "+adic.o1(5,0)+"</h3>");
        res.write("<h3> Ingresa : ntorres, 456 = "+adic.loginvalido('ntorres','456')+"</h3>");
        res.write("<h3> Ingresa : ntorres, 123 = "+adic.loginvalido('ntorres','123')+"</h3>");
        res.end();
    } 
    catch (error) {
        res.writeHead(500,{ 'Content-Type':'text/html; charset=utf-8' });
        res.end("<h1>Algo salió mal</h1>");
        console.log(error);            
    }
}).listen(5000);