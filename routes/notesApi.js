const express = require('express');
const router = express.Router();
const path = require('path')
const { readAppend, readMe, deleteMe } = require('../helpers/fsUtils')
const uuid = require('../helpers/uuid')


router.get('/', (req, res) => {
    readMe(path.join(__dirname, '../db/db.json')).then((data) => res.status(200).json(JSON.parse(data)))
    console.info(`${req.method} request recieved`)
});

// POST request
router.post('/', (req, res) => {
    const { title, text } = req.body;

    let newNote = {
        title,
        text,
        id: uuid()
    }
    readAppend(newNote);
    res.status(200).json(`${req.method} request recieved`)
});

// delete function
router.delete('/:id', (req,res) => {
    let id = req.params.id
    console.info(id)
    deleteMe(id)
    res.json('Deleted!')
});

module.exports = router;