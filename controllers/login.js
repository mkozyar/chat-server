var Login = require('../models/login');
var session = require('express-session');
var jwt = require('jwt-simple');

exports.login = function (req, res) {
    Login.login(req.body, function (err, user) {
        if (err) {
            return res.sendStatus(505);
        }

        if (user) {
            //session
           // req.session.user = user
            

            //jwt
            var token = jwt.encode(user, 'secretkey')
            var form = {
                token: token,
                user: user.login,
                userAvatar: user.avatar,
                connectionRequests: user.requests
            }
            return res.send(form);
 
        } else
            return res.sendStatus(404);
    })
} 
exports.checkAuth = function(req){
    Login.checkAuth(req, function (err, user) {       
        if (err) {
            return res.sendStatus(403);
        }
        
    })
}

