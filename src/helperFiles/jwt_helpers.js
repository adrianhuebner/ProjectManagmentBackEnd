'use strict';

const jwt = require('jsonwebtoken');
const createError = require('http-errors')

module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_SECRET;
      const options = {
        expiresIn: '1hr',
        issuer: 'projectmanager'
      };
      jwt.sign(payload, secret, options, (error, token) => {
        if(error) reject(error)
        resolve(token)
      })
    })
  }

  
}