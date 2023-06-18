const jwt = require('jsonwebtoken');
// const crypto = require('crypto');
const AuthError = require('../errors/auth-err');

const { SECRET_KEY = 'some-secret-key' } = process.env;
// const { SECRET_KEY = crypto.randomBytes(16).toString('hex') } = process.env;

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new AuthError('Необходима авторизация');
    }
    const token = authorization.replace('Bearer ', '');
    let payload;

    try {
      payload = jwt.verify(token, SECRET_KEY);
      if (!payload) {
        throw new AuthError('Необходима авторизация');
      }
    } catch (err) {
      throw new AuthError('Необходима авторизация');
    }

    req.user = payload;

    next();
  } catch (err) {
    next(err);
  }
};
