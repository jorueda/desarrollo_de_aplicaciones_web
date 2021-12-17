const express = require('express');
const app = express();
const port = process.env.PORT||9000;
app.listen(port, () => console.log('Server listening on port', port));

require("dotenv").config();

const mongoose = require('mongoose');
// mongodb connection
mongoose.connect(process.env.MONGODB_URI) // El archivo .env debe quedar en la carpeta raiz.
.then(() => console.log('Conectado a la base de datos Atlas MongoDB'))
.catch((error) => console.error(error));

// routes
app.get('/', (req,res) => {
    res.send('Welcome to my api')
}
);

const userRoutes = require('./routes/users');
app.use(express.json());
app.use('/api', userRoutes);