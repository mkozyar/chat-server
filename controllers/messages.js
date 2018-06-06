var Messages = require('../models/messages');

exports.sendMsg = function (req, res) {
  Messages.sendMsg(req.body, function (err) {
    if (err) {
      return res.sendStatus(500);
    }
    return res.sendStatus(200);
  })
}

exports.messagesByChat = function (req, res) {
  Messages.messagesByChat(req.params.chatRoom, function (err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  })
}

