'use strict';

const createError = require('http-errors')
const User = require('../auth/userModel.js');
const { newUserValidation, loginValidation } = require('../helperFiles/validateUser.js');

module.exports = {
  signup: async (request, response, next) => {
    try{
      const result = await newUserValidation.validateAsync(request.body);
      let user = new User(result);
      user.save()
        .then(user => {
          request.token = user.generateToken();
          request.user = user;
          response.set('token', request.token);
          response.cookie('auth', request.token);
          response.send(request.token)
        })
    } catch(error){
      if(error.isJoi === true) error.status = 422
      next(error);
    }
  },

  login: async (request, response, next) => {
    try{
      const result = await loginValidation.validateAsync(request.body);
      
      const user = await User.findOne({ username: result.username })
      if(!user) throw createError.NotFound('Username invalid')
      
      const foundMatch = await user.comparePassword(result.password)
      if(!foundMatch) throw createError.Unauthorized('Invalid username/password')

      response.cookie('auth', request.token);
      response.send(request.token);
    } catch(error){
      if(error.isJoi === true)
        return next(createError.BadRequest('Invalid Username/Password'))
      next()
    }
  }
}