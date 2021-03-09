'use strict';

const mongoose = require('mongoose');

const projectModel = new mongoose.Schema({
  creator: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  category: {
    type: String,
    required: true,
    default: 'project'
  },
  dateStarted: {
    type: Date,
    default: Date.now
  },
  dateFinished: {
    type: Date,
    default: Date.now
  },
  projectDescription: {
    type: String,
    default: 'new project'
  },
  notes: [String]
})

const Project = mongoose.model('projects', projectModel);
module.exports = Project;