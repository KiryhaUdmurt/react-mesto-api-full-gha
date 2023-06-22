const SERVER_ERR = 500;

const BAD_REQ = 400;

const NOTFOUND_ERR = 404;

const ALREADY_EXISTS = 409;

const AUTH_ERR = 401;

const FORBIDDEN_ERR = 403;

const URL_REGEX = /https?:\/\/(www)?[0-9a-z\-._~:/?#[\]@!$&'()*+,;=]+[.]{1,}[0-9a-z\-._~:/?#[\]@!$&'()*+,;=]+/i;

const { JWT_SECRET, NODE_ENV } = process.env;

module.exports = {
  SERVER_ERR,
  BAD_REQ,
  NOTFOUND_ERR,
  ALREADY_EXISTS,
  AUTH_ERR,
  FORBIDDEN_ERR,
  URL_REGEX,
  JWT_SECRET,
  NODE_ENV,
};
