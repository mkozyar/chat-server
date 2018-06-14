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

  exports.connectionRequest = function (req, res) {
    Users.connectionRequest(req, function (err) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    })
  }
  
  exports.getUserConnections = function (req, res) {
    Users.getUserConnections(req, function (err, doc) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.send(doc);
    })
  }