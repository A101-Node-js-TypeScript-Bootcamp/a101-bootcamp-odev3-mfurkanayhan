const jwt = require("jsonwebtoken");
const Joi = require("joi");
//! User Schema
const registerSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).max(16).required(),
});
//! Validation
module.exports.registerPost = async (req, res) => {
  try {
    const result = await registerSchema.validateAsync(req.body);
    res.json(result);
  } catch (error) {
    res.json(error.message);
  }
};
