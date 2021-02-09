'use strict';

module.exports = (err, request, response, next) => {
  console.log('SERVER ERROR', err);
  let error = { error: err.message || err};
  response.status(500).json(error);
};