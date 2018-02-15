var db = require('../db');

exports.getUsers = function ( cb) {
    db.get().collection('users').find().toArray(function (err, doc) {
        cb(err, doc);
    })
}