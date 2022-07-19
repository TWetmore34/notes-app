const express = require('express');
const path = require('path');
const { all } = require('./routes');
const allRoutes = require('./routes')
const app = express();

const PORT = 3001;

// fun middleware what does it do? idk but it works
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', allRoutes)
// Displays home page as statice element
app.use(express.static('public'))

// get request for /notes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')))

// next is CRUD options on /api/notes


// GET request for sending notes




// Delete request
// for whatever reason, whenever the front end makes a delete request, 
// its being read as a get request and run thru that function?




app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});