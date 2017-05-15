var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var mongodb = require("mongodb");
var mongoose = require('mongoose');
var config = require('./config');
var db = require('./db');
var ObjectId = require('mongodb').ObjectID;
var session = require('express-session');
var morgan = require('morgan');
var bluebird = require('bluebird');
var routes = require('./routes');
var checkToken = require('./middlewares/checkToken');

var app = express();

mongoose.Promise = bluebird;



app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cookieParser = require('cookie-parser');
app.use(cookieParser());
//var MongoStore = require('connect-mongo')(express);
app.use(session({
    secret: 'secret',
    resave: true,
    saveUnitialized: true
    
}));

app.use(routes);

app.get('/', function (req, res) {
    res.send('Welcome to CHAT')
})

app.get('/test', checkToken, (req, res) => {
    res.json('test');
})

  var server = http.createServer(app);
  server.listen(config.port, function () {
        console.log('start on port ' + config.port);
    })

var io = require('socket.io').listen(server);



