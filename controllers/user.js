var mongoose = require('mongoose');
var User = mongoose.model('User');

//read methods
exports.listAllUsers = function(req, res) {
    User.find({}, function(err, users) {
        if (err)
            res.send(err);
        res.json(users);
    });
};

exports.findByName = function(req, res) {
    User.find({name:req.params.userName}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


//insert methods
exports.insertUser = function(req, res) {
    var newUser = new User(req.body);
   newUser.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


//update methods
exports.updateUser = function(req, res) {
    User.findOneAndUpdate({_id:req.params.userId}, {$addToSet:req.body}, {new: true}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.updateUserArray = function(req, res) {
    User.findOneAndUpdate({_id:req.params.userId}, {$push: {comments: req.body.comments}}, {new: true}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


//delete methods
exports.deleteUser = function(req, res) {
    User.findByIdAndRemove(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'User successfully deleted' });
    });
};