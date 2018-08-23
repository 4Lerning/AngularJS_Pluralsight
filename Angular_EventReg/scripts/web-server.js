// Bing express library inside this file
var express = require('express');

// Bring path library inside this file
var path = require('path');

// create express Application by calling the express function
var app = express();

/* Path variable 
    - "__dirname" => points on the current directory
    - "/../" => Points to the upper directory
*/
var rootPath = path.normalize(__dirname + '/../');

// "static get the stuff from the given dir withot processing"
app.use(express.static(rootPath + '/app'));

// let application listen to a given port
app.listen(8000);
console.log('Listening on port 8000 ... ');

