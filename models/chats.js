var db = require('../db');

exports.chatsByUser = function (login, cb) {
    db.get().collection('chats').find({"users": {"$elemMatch": {"login": login}}}).toArray(function (err, doc) {
        cb(err, doc);
    })
}