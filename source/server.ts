import express = require('express');
const app:express.Application = express();
const fs = require('fs');
const http = require('http');
const morgan = require('morgan');
// var requirejs = require('requirejs');

// requirejs.config({
//    nodeRequire: require
// });
app.use(morgan('tiny'));
// this assumes node is started from dist
app.use(express.static('dist'));
//  app.use('/scripts',express.static(__dirname + '/node_modules/requirejs'));

// need this basic get for the initial html request
app.get('/',(req,res) =>
{
    console.log("request in");
    res.writeHead(200,{'Content-Type': 'text/html'});
    let myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(res);
});


app.listen(3006,() =>
{
    console.log('App is listening on port 3006')
});
