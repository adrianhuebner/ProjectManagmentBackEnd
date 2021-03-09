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
  
  describe('Authentication routes', () => {
    it('An user should be able to create an account', (done) => {
      return request.post('/signup')
        .send(testingUser)
        .then(response => {
          expect(response.status).toBe(200);
          done();
        });
    });

    it('An user should be able to sign into their account', (done) => {
      return request.post('./login')
        .auth('TestingUser', 'TestingStuff102') 
        .then(response => {
          expect(response.status).toBe(200);
          done();
        });
    });
  });
});
