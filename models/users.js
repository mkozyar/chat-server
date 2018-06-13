var db = require('../db');

exports.getUsers = function (req, cb) {
    // db.get().collection('users').find().toArray(function (err, doc) {
    //     cb(err, doc);
    // })
    db.get().collection('users').find({ "login": { $regex: req.query.friendsSearch || '', '$options': 'i' } }).toArray(function (err, doc) {
        var users = []
        doc.forEach(function(e) {
           if(e.login != req.query.currentUser){
            users.push({
                name: e.login,
                status: e.status,
                avatar: e.avatar
             })
           }
        }, this);
        cb(err, users);
    })
}

exports.getUserDetail = function (req, cb) {
    db.get().collection('users').findOne({ "login": req.params.userName }, function (err, user) {

        var selectedUser = Object.assign({}, user);
        delete selectedUser.password
        cb(err, selectedUser);
    })
}

exports.connectionRequest = function (req, cb) {
    db.get().collection('users').updateOne({ "login": req.params.user}, {$push: {'requests': req.body.user}}, function (err, user) {
        cb(err, user);
    })
}