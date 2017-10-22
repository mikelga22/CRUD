var mongoose = require('mongoose');

var user = mongoose.Schema({
    name: String,
    email: String,
    password: String,
	comments:[]
	
},{collection:'Users'});

module.exports=mongoose.model('User', user);