var Chats = require('../models/chats');



exports.chatsByUser = function (req, res) {
    Chats.chatsByUser(req, function (err, doc) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(doc);
    })
  }