var Messages = require('../models/messages');



exports.messagesByChat = function (req, res) {
    Messages.messagesByChat(req.params.chatRoom, function (err, doc) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(doc);
    })
  }