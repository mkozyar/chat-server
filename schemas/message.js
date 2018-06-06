var mongoose = require('mongoose');



var messageSchema = new mongoose.Schema({
    chatId: { type: String},
    sender: { type: String },
    text: { type: String },
    sentAt: {type: Date},
    avatar: {
        type: String,
        default: 'http://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-cv2px3xu5qo.jpg'
    }
});




var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
