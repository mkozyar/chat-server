var Users = require('../models/users');



exports.getUsers = function (req, res) {
    Users.getUsers(req, function (err, doc) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(doc);
    })
  } 

  exports.getUserDetail = function (req, res) {
    Users.getUserDetail(req, function (err, doc) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(doc);
    })
  }