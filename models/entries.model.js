const { Pool } = require('pg');
const queries = require('../queries/entries.queries') // Queries SQL

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',   //Por defecto, 5432
    database: 'postgres',
    password: '123456'
  });

// GET
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEntriesByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE TITLE .......................this
const updateEntry = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEntry,[title, content, email, category, originalTitle])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
};

//DELETE TITLE
const deleteEntry = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry,[title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


// GET all
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
// Get all entries EJERCICIO
const getAllEntriesWithoutId = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getDataAuthorWithoutId)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry,[title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


//DELETE


const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    getAllEntriesWithoutId,
    updateEntry,
    deleteEntry
}

module.exports = entries;


// ! Pruebas

    // getEntriesByEmail("birja@thebridgeschool.es")
    //     .then(data=>console.log(data))



// getAllEntries()
// .then(data=>console.log(data))



// let newEntry = {
//     title: "Se acabaron las mandarinas de TB",
//     content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
//     email: "guillermu@thebridgeschool.es",
//     category: "sucesos"
// }

// createEntry(newEntry)
//     .then(data => console.log(data)) 

    // getEntriesByEmail("guillermu@thebridgeschool.es")
    //     .then(data=>console.log(data))