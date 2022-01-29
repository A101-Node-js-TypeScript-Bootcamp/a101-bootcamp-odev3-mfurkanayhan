const jwt = require("jsonwebtoken");
const Joi = require("joi");
//! User Schema
const registerSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).max(16).required(),
});
//! Validation and gives tokens
module.exports.loginPost = async (req, res) => {
  try {
    const result = await registerSchema.validateAsync(req.body);
    const secret = "3845ldgjkvbkljdhj34095lvjkbkj3496cvlkb";
    result.token = jwt.sign(result, secret, { expiresIn: "7d" });
    res.json(result);
  } catch (error) {
    res.json(error.message);
  }
};
