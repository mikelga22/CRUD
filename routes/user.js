var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var users = require('../controllers/user');



//GET REQUESTS
//get all the users
router.get('/all',users.listAllUsers);
//get user by id
router.get('/:userName',users.findByName);

//POST REQUESTS
//insert user
router.post('/add', users.insertUser);

//UPDATE REQUESTS
//update user by id
router.post('/:userId', users.updateUser);
router.post('/push/:userId', users.updateUserArray);

//DELETE REQUESTS
//delete user by id
router.delete('/:userId',users.deleteUser);


module.exports=router;