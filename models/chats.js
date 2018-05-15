var db = require('../db');

exports.chatsByUser = function (req, cb) {
    db.get().collection('chats').find({$and:[{"users": {"$elemMatch": {"login": req.params.login}}}, {"name": {$regex: req.query.roomSearch || '', '$options' : 'i'}}]}).toArray(function (err, doc) {

        cb(err, doc);
    })
}
