const express = require('express');
const tipsApi = require('./notesApi')

const app = express();

app.use('/api/notes', tipsApi)

module.exports = app;