var mongoose = require('mongoose');

mongoose.connect('mongodb://mkozyar:mkozyar@ds129641.mlab.com:29641/chat_db');

module.exports = mongoose.connection;