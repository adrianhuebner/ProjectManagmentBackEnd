'use strict';

const express = require('express');
const authRouter = express.Router();
const User = require('./userModel.js')
const { userValidation } = require('../helperFiles/validateUserSchema.js')

authRouter.post('/signup', async (request, response, next) => {
  try{
    const result = await userValidation.validateAsync(request.body)
    let user = new User(result);
    user.save()
      .then(user => {
        request.token = user.generateToken();
        request.user = user;
        response.set('token', request.token);
        response.cookie('auth', request.token);
        response.send(request.token);
      })
  } catch (error){
    if(error.isJoi === true) error.status = 422
    next(error)
  }
});

module.exports = authRouter;