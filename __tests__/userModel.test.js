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
    it('An user should be able to create an account', (done) => {
      return request.post('/signup')
        .send(testingUser)
        .then(response => {
          expect(response.status).toBe(200);
          done();
        });
    });

    it('An user should be able to sign into their account', (done) => {
      return request.post('/login')
        .send('TestingUser', 'TestingStuff102') 
        .then(response => {
          expect(response.status).toBe(200);
          done();
        });
    });

    it('User should receive an error if they don\'t enter a proper email', (done) => {
      return request.post('/signup')
        .send(badEmailUser)
        .then(response => {
          expect(response.status).toBe(500);
          done();
        });
    });

    it('User will recieve a 404 when typing link in wrong', (done) => {
      return request.post('/badroute')
        .then(response => {
          expect(response.status).toBe(404);
          done();
        })
    });
  });
});
