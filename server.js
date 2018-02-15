var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var chatsController = require('./controllers/chats');
var messagesController = require('./controllers/messages');
var usersController = require('./controllers/users');
var registerController = require('./controllers/register');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

 app.get('/', function (req, res) {
     res.send('Hello API')
 })

 app.get('/chats/:login', chatsController.chatsByUser);
 app.get('/messages/:chatRoom', messagesController.messagesByChat);
 app.get('/users', usersController.getUsers);
 app.post('/registration', registerController.registration);

db.connect('mongodb://mkozyar:mkozyar@ds129641.mlab.com:29641/chat_db', function (err) {
    if (err) {
      return console.log(err);
    }
    app.listen(3012, function () {
      console.log('API app started');
    })
  })