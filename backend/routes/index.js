const router = require('express').Router();
const userRouter = require('./users');
const cardRouter = require('./cards');
const auth = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const { validateUser, validateAuth } = require('../middlewares/validate');
const NotFoundError = require('../errors/not-found-err');
const { requestLogger, errorLogger } = require('../middlewares/logger');

router.use(requestLogger);
router.post('/signup', validateUser, createUser);
router.post('/signin', validateAuth, login);
router.use(auth);
router.use('/', userRouter);
router.use('/', cardRouter);
router.use('*', () => {
  throw new NotFoundError('Некорректный путь');
});
router.use(errorLogger);

module.exports = router;
