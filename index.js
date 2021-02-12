'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const mongoOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

mongoose.connect(process.env.MONGODB_URI, mongoOptions);

require('./src/server.js').start(process.env.PORT)