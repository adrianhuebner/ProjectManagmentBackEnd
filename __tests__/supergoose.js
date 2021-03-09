'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const MongoMemoryServer = require('mongodb-memory-server').default;
const supertest = require('supertest');

let mongoServer;

let supergoose = module.exports = {};
supergoose.server = (server) => supertest(server);

supergoose.startDB = async() => {
  mongoServer = new MongoMemoryServer();
  const mongoURI = await mongoServer.getUri();
  const mongooseOptions = {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  await mongoose.connect(mongoURI, mongooseOptions, (error) => {
    if (error) console.error(error);
  });
};

supergoose.stopDB = () => {
  mongoose.disconnect();
  mongoServer.stop();
};

describe('supergoose', () => {
  it('really works', () => {
    expect(true).toBeTruthy();
  });
});