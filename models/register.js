var db = require('../db');
var User = require('../schemas/user');



exports.registration = function (data, cb) {

    var form = {
        email: data.email,
        login: data.login,
        password: data.password
    };

    var newUser = new User(form);

    newUser.save(function (err, res) {
        cb(err, res);
    })
} 