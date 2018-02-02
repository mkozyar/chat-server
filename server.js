var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('asd')
})

app.listen(3012, function(){
    console.log(111)
})