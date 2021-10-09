const UserController = require('../controllers/user');
const user = require('express').Router();

user.post('/login', UserController.login);
user.post('/register', UserController.register);

module.exports = user;