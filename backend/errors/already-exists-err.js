const { ALREADY_EXISTS } = require('../utils/constants');

class AlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ALREADY_EXISTS;
  }
}

module.exports = AlreadyExistsError;
