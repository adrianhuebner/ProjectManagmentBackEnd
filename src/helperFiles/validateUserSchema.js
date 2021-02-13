'use strict';

const Joi = require('joi');

const userValidation = Joi.object({
  email: Joi.string()
    .email()
    .lowercase()
    .required(),
  username: Joi.string()
    .required(),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9#$%^&*]{6,20}$'))
    .required()
})
/*
  RegExp = password is required to have: lowercase: [a-z], uppercase: [A-Z], number: [0-9], special characters allowed: [#,$,%,^,&,*] and a minimum of 6 and a maximum of 20
*/

module.exports = {
  userValidation
}