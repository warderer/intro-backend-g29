// #1 Llamar a la biblioteca de express
const express = require('express'); // Common.JS

// #2 Crear una instancia de express
const app = express();

app.use(express.urlencoded({ extended: true })); // urlencoded me permite recibir información más rica en el body
app.use(express.json()); // json me permite recibir información en formato json

// #3 Definir las rutas
app.get('/', (req, res) => {
    res.send('Hola World! 🌍');
});

// #4 Levantar el servidor en un puerto, por ejemplo el 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000 🚀');
});