var db = require('../db');

exports.messagesByChat = function (chatId, cb) {
    db.get().collection('messages').find({"chatId": chatId}).toArray(function (err, doc) {
        cb(err, doc);
    })
}