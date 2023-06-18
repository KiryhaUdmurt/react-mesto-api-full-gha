const BadRequestError = require('../errors/bad-req-err');
const ForbiddenError = require('../errors/forbidden-err');
const NotFoundError = require('../errors/not-found-err');
const cardModel = require('../models/card');

const getCards = async (req, res, next) => {
  try {
    const cards = await cardModel.find({});
    res.send(cards);
  } catch (err) {
    next(err);
  }
};

const createCard = async (req, res, next) => {
  try {
    const card = await cardModel.create({
      ...req.body,
      owner: req.user._id,
    });
    res.status(201).send(card);
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new BadRequestError('Переданы некорректные данные'));
      return;
    }
    next(err);
  }
};

const deleteCard = async (req, res, next) => {
  try {
    const { cardId } = req.params;
    const { _id } = req.user;

    const card = await cardModel.findById(cardId).populate('owner');
    if (!card) {
      throw new NotFoundError('Карточка с данным id не существует');
    }

    const owner = card.owner.id;
    if (owner !== _id) {
      throw new ForbiddenError('Можно удалить только свою карточку');
    }

    await cardModel.findByIdAndRemove(cardId);

    res.send(card);
  } catch (err) {
    if (err.name === 'CastError') {
      next(new BadRequestError('Переданы некорректные данные'));
      return;
    }
    next(err);
  }
};

const likeCard = async (req, res, next) => {
  try {
    const { cardId } = req.params;
    const likes = await cardModel.findByIdAndUpdate(
      cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true },
    );
    if (!likes) {
      throw new NotFoundError('Карточка с данным id не существует');
    }
    res.send(likes);
  } catch (err) {
    if (err.name === 'CastError') {
      next(new BadRequestError('Переданы некорректные данные'));
      return;
    }
    next(err);
  }
};

const dislikeCard = async (req, res, next) => {
  try {
    const { cardId } = req.params;
    const likes = await cardModel.findByIdAndUpdate(
      cardId,
      { $pull: { likes: req.user._id } },
      { new: true },
    );
    if (!likes) {
      throw new NotFoundError('Карточка с данным id не существует');
    }
    res.send(likes);
  } catch (err) {
    if (err.name === 'CastError') {
      next(new BadRequestError('Переданы некорректные данные'));
      return;
    }
    next(err);
  }
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
