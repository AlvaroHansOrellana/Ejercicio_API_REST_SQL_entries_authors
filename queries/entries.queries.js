const { deleteEntry } = require("../models/entries.model");

const queries = {
    getEntriesByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`,
    getAllEntries: `SELECT * FROM entries;`,
    createEntry: `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
    getDataAuthorWithoutId: `SELECT t1.title,  t1.content, t1.date, t1.category, t2.name, t2.surname, t2.image
    FROM entries as t1
    INNER JOIN authors as t2 on t1.id_author = t2.id_author`,
    updateEntry: `UPDATE entries
    SET title = 'MODIFICADO', content = 'MODIFICADO', category = 'MODIFICADO'
    WHERE title = 'No entiendo nada, ayudame Jesús'`,
    deleteEntry: `DELETE FROM entries WHERE title = $1;`
}
module.exports = queries;

// ALTER TABLE entries ADD UNIQUE (title)