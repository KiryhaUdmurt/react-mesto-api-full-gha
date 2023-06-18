const { AUTH_ERR } = require('../utils/constants');

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = AUTH_ERR;
  }
}

module.exports = AuthError;
