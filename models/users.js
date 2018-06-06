var db = require('../db');

exports.getUsers = function (req, cb) {
    // db.get().collection('users').find().toArray(function (err, doc) {
    //     cb(err, doc);
    // })
    db.get().collection('users').find({ "login": { $regex: req.query.friendsSearch || '', '$options': 'i' } }).toArray(function (err, doc) {
        var users = []
        doc.forEach(function(e) {
            users.push({
               name: e.login,
               status: e.status,
               avatar: e.avatar
            })
        }, this);
        cb(err, users);
    })
}