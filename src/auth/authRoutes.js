'use strict';

const express = require('express');
const authRouter = express.Router();
const { userSchema } = require('../helperFiles/validateUserSchema.js')

authRouter.post('/signup', (request, response) => {
  response.send('You have successfully signed up');
  console.log('You just hit the sign up route!')
});

module.exports = authRouter;