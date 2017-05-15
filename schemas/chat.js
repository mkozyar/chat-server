var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
    name: {type: String, required : true, unique: true, index: true},
    creator: String,
    users:Array,
    description: {type: String, default: 'description'},
    avatar: {
        type: String,
        default: 'http://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-cv2px3xu5qo.jpg'
    }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;



