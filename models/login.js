var db = require('../db');
var User = require('../schemas/user');


exports.login = function (data, cb) {
    db.get().collection('users').findOne({ login: data.login }, function (err, user) {
        if (err) {
            return cb(err)
        }

        if (!user) {
            console.log(err)
            return cb(null, false,  {msg: 'no found' })
        }

        User.comparePassword(data.password, user.password, function (err, isMatch) {
            if (err) {
                return cb(err)
            }
            if (!isMatch) {
                return cb(null, user, { msg: 'wrong pass' })
            }
            console.log('ggg')
            return cb(null, user, { msg: 'ok!' })
        })

    })

} 