var Register = require('../models/register');



exports.registration = function (req, res) {
    Register.registration(req.body, function (err) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    })
  } 