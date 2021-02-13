'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
}, 'This email has already been used');

/**
 * Hashing the password that the user is entering
 */
userSchema.pre('save', async function(){
  console.log('About to save the user in the database');
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 10);
  };
});

/**
 * Basic authentification function
 */
userSchema.statics.authenticateBasic = function(auth){
  let query = {username: auth.username};
  return this.findOne(query)
    .then(user => user.comparePassword(auth.password));
};

/**
 * Compare plain text password against the hashed password that is saved
 */
userSchema.methods.comparePassword = function(password){
  return bcrypt.compare(password, this.password)
    .then(isValid => isValid ? this: null);
};

/**
 * Generate a jsonwebtoken from the user id and the secret that is in the .env
 */
userSchema.methods.generateToken = function(){
  let tokenData = {
    id:this._id
  };
  return jwt.sign(tokenData, process.env.SECRET || 'extrasecretherekustincase');
};

const User = mongoose.model('users', userSchema)
module.exports = User