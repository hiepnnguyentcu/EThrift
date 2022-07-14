const mongoose = require('mongoose');
const Joi = require("joi");
const jwt = require("jsonwebtoken");

require('dotenv').config();

const SECRET = process.env.SECRET_KEY;

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 255,
      unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 1024,
}
});

userSchema.methods.generateJWT = function() {
    const payload = {
        email: this.email,
        exp: Date.now()/1000 + 86400
    }

    return jwt.sign(payload, SECRET);
}

function validateUser(user) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required()
    })
    return schema.validate(user);
}

const User = model('Users', userSchema);

exports.User = User;
exports.validateUser = validateUser;