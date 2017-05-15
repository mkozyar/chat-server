const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;
const db = require('../db');
const User = require('../schemas/user');
const Chat = require('../schemas/chat');
const Message = require('../schemas/message');
const jwt = require('jsonwebtoken');

//registration

router.post('/registration', (req, res) => {
    const createUser = new User({
        email: req.body.email,
        login: req.body.login,
        password: req.body.password

    });


    db.collection('users').insert(createUser, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

//login

router.post('/login', (req, res) => {
    const {login, password} = req.body;
    const user = db.collection('users').findOne({ login }).then((user) => {

        if (!user) {
            return res.status(400).json({
                status: 400,
                message: 'Login not found'
            });
        }
        // try {
        //     const result = user.comparedPasswords(password);
        // } catch (e) {
        //     return res.status(400).json({
        //         status: 400,
        //         message: 'Wrong password'
        //     });
        // }
        else if (user.password !== req.body.password) {
            return res.status(400).json({
                status: 400,
                message: 'Wrong password'
            });
        }
        const token = jwt.sign({_id: user._id}, 'secret');
        
        res.send({
            token: token,
            user: req.body.login
        });
        res.json(token);

    })
})

//create chat

router.post('/chats', (req, res) => {
    const createChat = new Chat({
        name: req.body.name,
        creator: req.body.creator,
        users: req.body.users

    });


    db.collection('chats').insert(createChat, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

//get users

router.get('/users', (req, res) => {
    db.collection('users').find().toArray(function (err, docs) {
        if (err) {
            return res.sendStatus(500);
        }
        res.send(docs);
    });

});

//get chats

router.get('/chats', (req, res) => {
    db.collection('chats').find().toArray(function (err, docs) {
        if (err) {
            return res.sendStatus(500);
        }
        res.send(docs);
    });

});


//create message for current chat

router.post('/chats/:name', (req, res) => {
    const createMsg = new Message({
        text: req.body.text,
        sender: req.body.sender,
        chatId: req.params.name
    });


    db.collection('messages').insert(createMsg, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

//delete user

router.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    db.collection('users').deleteOne({ _id: ObjectId(id) }, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

//delete chat

router.delete('/chats/:id', (req, res) => {
    var id = req.params.id;
    db.collection('chats').deleteOne({ _id: ObjectId(id) }, function (err, result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

//get messages for current chat

router.get('/chats/:name', (req, res) => {
    db.collection('messages').find({ chatId: req.params.name }).toArray(function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
})

module.exports = router
