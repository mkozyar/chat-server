var Login = require('../models/login');
var session = require('express-session');

exports.login = function (req, res) {
    Login.login(req.body, function (err, user) {
        if (err) {
            return res.sendStatus(500);
        }

        if (user) {
            req.session.user = user
            return res.sendStatus(200);
        } else
            return res.sendStatus(404);
    })
} 