var Chats = require('../models/chats');



exports.chatsByUser = function (req, res) {
    Chats.chatsByUser(req.params.login, function (err, doc) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(doc);
    })
  }