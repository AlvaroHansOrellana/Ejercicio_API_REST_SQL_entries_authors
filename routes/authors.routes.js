const express = require('express');
// Rutas de productos
const authorsController = require("../controllers/authors.controller");
const router = express.Router();

//PARA AUTHORS
router.get('/', authorsController.getAuthors);

// router.get('/', entriesController.getEntries);   ???¿¿¿
// router.post('/', entriesController.createEntry);
// router.get('/all', entriesController.getAllEntriesWithoutId);
// router.put('/all', entriesController.updateEntry);
// router.delete('/all', entriesController.deleteEntry);

module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */