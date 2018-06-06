var db = require('../db');
var ChatRoom = require('../schemas/chat');

exports.chatsByUser = function (req, cb) {
    // db.get().collection('users').find({ $and: [{ "users": { "$elemMatch": { "login": req.params.login } } }, { "name": { $regex: req.query.roomSearch || '', '$options': 'i' } }] }).toArray(function (err, doc) {

    //     cb(err, doc);
    // })
    db.get().collection('users').findOne({"login": req.params.login}, function (err, doc) {
        
                 cb(err, doc);
             })
}

exports.createChat = function (data, cb) {
    var newChat = new ChatRoom(data);

    newChat.save(function (err, res) {
        if (err) {
            console.log(err)
        }
        cb(err, res);
    })
}
