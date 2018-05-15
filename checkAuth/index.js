var loginController = require('../controllers/login');
var jwt = require('jwt-simple');

exports.checkAuth = function (req, res, next) {
  if (req.method != 'OPTIONS') {
    var token = req.headers.authorization
    var decodedUser

    try {
      decodedUser = jwt.decode(JSON.parse(token), 'secretkey');
      loginController.checkAuth(decodedUser)
    } catch (e) {
      return res.sendStatus(403)
    }
    if (!req.headers.authorization) {
      console.log('notoken')
      return res.sendStatus(403)
    }
  }
  next()
}