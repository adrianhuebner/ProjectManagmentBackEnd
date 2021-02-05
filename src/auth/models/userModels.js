'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const users = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true}
})

users.pre('save', async function(){
  console.log('Information is about to be saved')
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 10)
  }
});

users.statics.authenticateBasic = function(authorization){
  let query = {username: authorization.username};
  return this.findOne(query)
    .then(user => user.comparePassword(authorization.password))
    .catch(console.error)
}

users.methods.comparePassword = function(password){
  return bcrypt.compare(password, this.password)
  .then(isValid => isValid ? this: null);
};

users.methods.generateToken = function(){
  let tokenData = {
    id: this._id
  };
  return jwt.sign(tokenData, SECRET || 'secretjustincase');
};

module.exports = mongoose.model('users', users)