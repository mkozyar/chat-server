var mongoose = require('mongoose');
var bcrypt = require('bcrypt');



var userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String },
    login: { type: String, required: true, unique: true, index: true },
    avatar: {
        type: String,
        default: 'http://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-cv2px3xu5qo.jpg'
    },
    status: {
        type: String,
        default: 'Your status here...'
    }, 
    rooms: []
});


userSchema.pre('save', function (next) {
    var user = this;

    this.hashPassword(user.password, function (err, hash) {
        if (err) {
            return next(err)
        }
        user.password = hash;
        next()
    })
})

userSchema.methods.hashPassword = function (pass, cb) {
    bcrypt.genSalt(9, function (err, salt) {
        if (err) {
            return cb(err)
        }
        bcrypt.hash(pass, salt, function (err, hash) {
            if (err) {
                return cb(err)
            }
            return cb(null, hash)
        })
    })
}






var User = mongoose.model('User', userSchema);

module.exports = User;

module.exports.comparePassword = function (pass, hashedPass, cb) {
    bcrypt.compare(pass, hashedPass, function (err, isMatch) {
        if (err) {
            return cb(err)
        }

        return cb(null, isMatch)

    })
}