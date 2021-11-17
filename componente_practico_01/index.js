const path = require('path')
const express = require('express')

const app = express()
app.use(express.json()) // Requerido para evitar el error TypeError: Cannot destructure property 'a' of 'peticion.body' as it is undefined.

app.get('/', (peticion, respuesta) => {
    respuesta.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/suma', (peticion, respuesta) => {
    const {a, b} = peticion.body
    let result = parseInt(a) + parseInt(b)
    respuesta.send({result:result})
    console.log(result)
})

app.listen(5000, () => { // Solamente funciona en http://localhost:5000/ no en http://127.0.0.1:5000/
    console.log("Servidor escuchando por el puerto 5000")
})
