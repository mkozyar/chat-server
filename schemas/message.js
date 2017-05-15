var mongoose = require('mongoose');
var messageSchema = new mongoose.Schema({
    text: {type: String, required : true},
    sender:  String,
    chatId: String,
    sentAt: {
        type: Date,
        default: Date.now()
    }
});

const Message = mongoose.model('Messages', messageSchema);

module.exports = Message;