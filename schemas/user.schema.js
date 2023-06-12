var Joi = require('joi');



const createUserschema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().min(6).required(),
});


module.exports = {
  createUserschema,
  loginSchema
}
