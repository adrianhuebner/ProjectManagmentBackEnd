'use strict';

const express = require('express');
const authRouter = express.Router();
const userController = require('../controllers/userController.js');

authRouter.post('/signup', userController.signup);
authRouter.post('/login', userController.login);

module.exports = authRouter;