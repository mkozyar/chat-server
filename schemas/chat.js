var mongoose = require('mongoose');



var chatRoomSchema = new mongoose.Schema({
    chatName: { type: String },
    description: {
        type: String,
        default: 'description here...'
    },
    users: [],
    isRoom: {
        type: Boolean,
        default: false
    },    
    avatar: {
        type: String,
        default: 'http://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-cv2px3xu5qo.jpg'
    }
});




var ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;