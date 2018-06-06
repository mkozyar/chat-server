var db = require('../db');
var Message = require('../schemas/message');



exports.sendMsg = function (data, cb) {
    var newMsg = new Message(data);

    newMsg.save(function (err, res) {
        if (err) {
            console.log(err)
        }
        cb(err, res);
    })
} 



exports.messagesByChat = function (chatId, cb) {
    db.get().collection('messages').find({"chatId": chatId}).toArray(function (err, doc) {
        cb(err, doc);
    })
}


