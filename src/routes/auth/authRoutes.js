'use strict';

const express = require('express');
const authorizationRouter = express.Router();

const User = require('../../auth/models/userModels.js');
const auth = require('../../auth/authMiddleware/authMiddleware.js');

authorizationRouter.post('/signup', (request, response, next) => {
  let user = new User(request.body);
  user.save()
    .then(user => {
      request.token = user.generateToken();
      request.user = user;
      response.set('token', request.token);
      response.cookie('auth', request.token);
      response.send(request.token)
    })
    .catch(next);
});

authorizationRouter.post('/signin', auth, (request, response, next) => {
  response.cookie('auth', request.token);
  response.send(request.token)
});

module.exports = authorizationRouter;