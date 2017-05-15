var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    email: {type: String, unique : true, required : true},
    password: {type: String, default: 'mkozyar2'},
    login: {type: String, required : true, unique: true, index: true},
    avatar: {
        type: String,
        default: 'http://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-cv2px3xu5qo.jpg'
    }
});

// userSchema.pre('save',  function(next) {
// //   if (!this.isModified('password')) {
// //     return next();
// //   }

//   const salt = bcrypt.genSalt(10);
//   const hash = bcrypt.hash(this.password, salt);

//   this.password = hash;
//   next();
// });

// userSchema.methods.comparePasswords = function(password) {
//   return bcrypt.compare(password, this.password);
// };

const User = mongoose.model('User', userSchema);

module.exports = User;

module.exports.createUser = function(User, callback) {
    bcrypt.genSalt(10, function(err, salt) { 
        bcrypt.hash(User.password, salt, function(err, hash) {
            User.password = hash;
            User.save(callback);
        });
    });
};

