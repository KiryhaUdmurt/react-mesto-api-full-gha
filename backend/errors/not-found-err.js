const { NOTFOUND_ERR } = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOTFOUND_ERR;
  }
}

module.exports = NotFoundError;
