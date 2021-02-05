'use strict';

const User = require('../models/userModels.js');

module.export = (request, response, next) => {

  try{
    let [authType, encodedString] = request.headers.authorization.split(/\s+/);
    switch(authType.toLowerCase()){
      case 'basic': 
        return _authorizationBasic(encodedString);
      default:
        return _authorizationError();
    }
  }
  catch(e){
    return _authorizationError();
  }

  function _authorizationBasic(authString){
    let base64Buffer = Buffer.from(authString, 'base64');
    let bufferString = base64Buffer.toString();
    let [username, password] = bufferString.split(':');
    let auth = {username, password};

    return User.authenticateBasic(auth)
      .then(user => _authenticate(user));
  }

  function _authenticate(user){
    if(user){
      request.user = user;
      request.token = user.generateToken();
      next();
    }
    else{
      _authorizationError();
    }
  }

  function _authorizationError(){
    next({
      status: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid User ID/Password'
    })
  }
}