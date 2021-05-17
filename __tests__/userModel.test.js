'use strict';

require('dotenv').config();
const server = require('../src/server');
const User = require('../src/auth/userModel');
const supergoose = require('./supergoose');
const request = supergoose.server((server.server));
const jwt = require('jsonwebtoken');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Testing all my user routes', () => {

  const testingUser = { 
                        email: 'testingUser@tests.com',
                        username: 'TestingUser',
                        password: 'TestingStuff102'
                      };

  const badEmailUser = {
                        email: 'testingattesting.com',
                        username: 'GotBadEmail',
                        password: 'TestingBadEmail1'
                      }
  
  describe('Authentication routes', () => {
    it('An user should be able to create an account', async (done) => {
      const response = await request.post('/signup')
        .send(testingUser);
      expect(response.status).toBe(200);
      done();
    });

    it('An user should be able to sign into their account', async () => {
      await request.post('/login')
        .send({
          username: 'TestingUser',
          password: 'TestingStuff102'
        })
    });

    it('An user gets an error when they enter the wrong password', async (done) => {
      const response = await request.post('/login')
        .auth('TestingUser', 'WhatIsMyPassword?');
      expect(response.status).toBe(500);
      done();
    });

    it('User should receive an error if they don\'t enter a proper email', async (done) => {
      const response = await request.post('/signup')
        .send(badEmailUser);
      expect(response.status).toBe(500);
      done();
    });

    it('User will recieve a 404 when typing link in wrong', async (done) => {
      const response = await request.post('/badroute');
      expect(response.status).toBe(404);
      done();
    });
  });
});
