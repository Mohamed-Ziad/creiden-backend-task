import Joi from "joi";

const UserSchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  image: Joi.string().required(),
  role: Joi.string().required()
})


module.exports = { UserSchema }