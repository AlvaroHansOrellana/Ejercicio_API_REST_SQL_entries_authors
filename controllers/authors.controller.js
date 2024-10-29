const entry = require('../models/authors.model'); // Importar el modelo de la BBDD


// GET http://localhost:3000/entries --> ALL
const getAllEntriesWithoutId = async (req, res) => {
    // let entries;
    // if (req.query) {
       let entries = await entry.getAllEntriesWithoutId(req.query);
    // }
    // else {
    //     entries = await entry.getAllEntries();
    // }
    res.status(200).json(entries); // [] con las entries encontradas
}


// PUT http://localhost:3000/entries --> ALL
const updateEntry = async (req, res) => {
    let entries;
    if (req.query.title) {
       entries = await entry.updateEntry(req.query.title);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(`Se ha modificado la entry ${title}`); // [] con las entries encontradas
};

// DELETE http://localhost:3000/entries --> ALL
const deleteEntry = async (req, res) => {
    let entries;
    if (req.query.title) {
       entries = await entry.deleteEntry(req.query.title);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(`Se ha borrado la entry ${title}`); // [] con las entries encontradas
};


// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

// ! CHECK HERE TOO
module.exports = {
    // getEntries,
    createEntry,
    getAllEntriesWithoutId,
    deleteEntry,
    updateEntry
}


//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}
