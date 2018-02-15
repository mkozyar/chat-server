var Register = require('../models/register');



exports.registration = function (req, res) {
    Register.registration(req.body, function (err) {
      if (err) {
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    })
  } 