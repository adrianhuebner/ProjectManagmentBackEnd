'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bycrpt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

/**
 * Validating that email entered is going to be unique so no one can sign up twice
 */
userSchema.path('email').validate(async(email) => {
  const checkingEmail = await mongoose.models.users.countDocuments({ email })
  return !checkingEmail
}, 'This email has already been used')

/**
 * Hashing the password that the user is entering
 */
userSchema.pre('save', async function(){
  console.log('About to save the user in the database');
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 10)
  }
})

const User = mongoose.model('users', userSchema)
module.exports = User