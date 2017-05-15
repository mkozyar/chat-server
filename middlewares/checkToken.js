const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = function (req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return next({
      status: 403,
      message: 'Forbidden. No Token!'
    });
  }

  try {
    var tokenObj = jwt.verify(token, 'secret');
  } catch ({ message }) {
    return next({
      status: 400,
      message
    });
  }
  
  req.token = tokenObj;
  next();
}