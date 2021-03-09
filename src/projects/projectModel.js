'use strict';

const mongoose = require('mongoose');

const projectModel = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    default: 'project'
  },
  dateStarted: {
    type: Date,
    default: Date.now
  }
})