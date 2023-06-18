const { BAD_REQ } = require('../utils/constants');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = BAD_REQ;
  }
}

module.exports = BadRequestError;
