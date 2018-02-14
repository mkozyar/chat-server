

module.exports = function (app) {

    app.get('/chat', function (req, res) {
        db.collection('users').find().toArray(function (err, docs) {
            if (err) {
                return res.sendStatus(500);
            }
            res.send(docs);
        });
    })
};