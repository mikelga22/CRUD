var mongoose = require('mongoose');

var user = mongoose.Schema({
    name: String,
    email: String,
    password: String
	
},{collection:'Users'});

module.exports=mongoose.model('User', user);