var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    email: {type: String, required : true},
    password: {type: String, default: 'mkozyar2'},
    login: {type: String, required : true,index: true},
    avatar: {
        type: String,
        default: 'http://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-cv2px3xu5qo.jpg'
    }
});


var User = mongoose.model('User', userSchema);

module.exports = User;

