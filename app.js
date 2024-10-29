const express = require('express') // Importa la libreria  (paquete)
const app = express() // Inicializar el servidor con express, variable app representa el servidor
const port = 3000 // Puerto a usar

app.use(express.json());   // ! AL INICIO DE LA HOJA, CONFIGURACION DE EXPRESS PARA QUE PUEDA RECIBIR OBJETOS JSON

// Rutas
const entriesRoutes = require("./routes/entries.routes");
const authorsRoutes = require("./routes/authors.routes");

// app.get('/', function (req, res) {
//     res.send('Hello World, Welcome to BackEnd') 
// });

// Rutas
//API
app.use('/api/entries',entriesRoutes);
app.use('/api/authors',authorsRoutes);

  //  Para ruta no existente ...
app.use("*", (req, res) => {
    res.status(404).send("Ruta no encontrada");
});

//                     ----> HERE<------
app.listen(port, () => {
    console.log(`Example app listenig on http://localhost:${port}`)
});