'use strict';

const mongoose = require('mongoose');
const bycrypt = require('bycrpt');
const jwt = require('jsonwebtoken');

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  }
})