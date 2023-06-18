const { FORBIDDEN_ERR } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBIDDEN_ERR;
  }
}

module.exports = ForbiddenError;
