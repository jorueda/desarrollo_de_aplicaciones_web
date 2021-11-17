const path = require('path')
const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (peticion, respuesta) => {
    respuesta.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/suma', (peticion, respuesta) => {
    const {a, b} = peticion.body
    let result = parseInt(a) + parseInt(b)
    respuesta.send({result:result})
    console.log(result)
})

app.listen(5000, () => {
    console.log("Servidor escuchando por el puerto 5000")
})
