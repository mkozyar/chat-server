var Login = require('../models/login');

exports.login = function (req, res) {
    Login.login(req.body, function (err, user) {
      if (err) {
        return res.sendStatus(500);
      }
     
      if (user) {
        return res.sendStatus(200);
      } else
      res.sendStatus(400);
    })
  } 