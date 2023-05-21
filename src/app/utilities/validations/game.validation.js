const Joi = require("joi");

const GameSchema = Joi.object({
  name: Joi.string().min(3).required(),
  size: Joi.string().required(),
  image: Joi.string().required(),
});

module.exports = { GameSchema }