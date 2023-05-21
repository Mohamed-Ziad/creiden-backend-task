const Joi = require('joi');


const RegisterSchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

const UserSchema = Joi.object({
  name: Joi.string().min(4).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  role: Joi.string().min(4).required(),
  image: Joi.object({
    fullPath: Joi.string(),
    relativePath: Joi.string()
  }),
})


module.exports = { RegisterSchema, UserSchema }