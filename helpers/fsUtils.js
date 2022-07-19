const fs = require('fs');
const util = require('util');
const path = require('path')

// read file promise
const readMe = util.promisify(fs.readFile)

// write to file
const writeToFile = (content) => {
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(content), (err) => {
        if(err) throw err
        else console.info('file written')
    })
};

// append
const readAppend = (content) => {
    readMe(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if(err) throw err;
        else {
            let parsed = JSON.parse(data);
            parsed.push(content);
            writeToFile(parsed);
        }
    })
};

const deleteMe = (id) => {
    readMe(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if(err) throw err;
        else {
            let parsed = JSON.parse(data);
           
            console.info(parsed)
            
            for(i=0;i<parsed.length;i++){
                if(parsed[i].id === id){
                    parsed.splice(i,1)
                }
            }
            writeToFile(parsed)
            // console.info()
            console.info(parsed)
        }
    })
};


module.exports = {
    readAppend,
    readMe,
    deleteMe
}