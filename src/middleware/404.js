'use strict';

module.exports = (request, response, next) => {
  let error = { error: 'Resource Not Found'};
  response.statusCode = 404;
  response.statusMessage = 'This Page isn\'t Found';
  response.setHeader = ('Content-Type', 'application/json');
  response.write(JSON.stringify(error));
  response.end();
}