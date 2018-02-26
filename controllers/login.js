var Login = require('../models/login');
var session = require('express-session');
var jwt = require('jwt-simple');
//var jwtDecode = require('jwt-decode');

exports.login = function (req, res) {
    Login.login(req.body, function (err, user) {
        if (err) {
            return res.sendStatus(500);
        }

        if (user) {
            //session
           // req.session.user = user
            

            //jwt
            var token = jwt.encode(user, 'secretkey')

            return res.send(token);

        } else
            return res.sendStatus(404);
    })
} 