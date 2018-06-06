var express = require('express');
var bodyParser = require('body-parser');
var connect = require('connect');
//var session = require('express-session');
var mongoose = require('mongoose');
//var MongoStore = require('connect-mongo')(session);
var db = require('./db');
var WebSocket = require('ws').Server;
var chatsController = require('./controllers/chats');
var messagesController = require('./controllers/messages');
var usersController = require('./controllers/users');
var registerController = require('./controllers/register');
var loginController = require('./controllers/login');
var checkAuth = require('./checkAuth');



var app = express();

var server = new WebSocket({port: 3112});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
})

// app.use(session({
//   secret: "secret",
//   key: "key",
//   cookie: {
//     "path": '/',
//     "httpOnly": true
//   },
//   store: new MongoStore({mongooseConnection: mongoose.connection})
// }))


app.post('/registration', registerController.registration);
app.post('/create-chat', chatsController.createChat);
app.post('/login', loginController.login);


app.use(checkAuth.checkAuth)

app.post('/messages/:chatRoom', messagesController.sendMsg);
app.get('/chats/:login', chatsController.chatsByUser);
app.get('/messages/:chatRoom', messagesController.messagesByChat);

app.get('/users', usersController.getUsers);

app.get('/', function (req, res) {
  res.send('Hello API')
})

db.connect('mongodb://mkozyar:mkozyar@ds129641.mlab.com:29641/chat_db', function (err) {
  if (err) {
    return console.log(err);
  }
  app.listen(3012, function () {
    console.log('API app started');
  })
})

server.broadcast = function broadcast(data) {
  server.clients.forEach(function each(client) {
    client.send(data)
  })
}

server.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    server.clients.forEach(function each(client) {
      client.send(message)
    })
  })
})
