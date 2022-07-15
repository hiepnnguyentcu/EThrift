const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

const { ROLES } = require("../constants/role");

require("dotenv").config();

const SECRET = process.env.SECRET_KEY;

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 1024,
  },
  handle: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
    unique: true,
  },
  role: {
    type: Number,
    enum: [ROLES.ADMIN_ID, ROLES.BUYER_ID, ROLES.SELLER_ID],
    required: true,
  },
  refreshToken: {
    type: String,
  },
  avatarImage: {
    type: String,
    minLength: 5,
    maxLength: 1024,
  },
  createdAt: {
    type: Number,
  },
  modifiedAt: {
    type: Number,
  },
});

userSchema.methods.generateJWT = function () {
  const payload = {
    email: this.email,
    role: this.role,
    handle: this.handle,
    type: "ACCESS",
    exp: Math.round(Date.now() / 1000) + 86400,
  };

  return jwt.sign(payload, SECRET);
};

userSchema.methods.generateRefreshToken = function () {
  const payload = {
    email: this.email,
    role: this.role,
    handle: this.handle,
    type: "REFRESH",
    exp: Math.round(Date.now() / 1000) + 86400 * 92,
  };

  const refreshToken = jwt.sign(payload, SECRET);

  this.refreshToken = refreshToken;

  return refreshToken;
};

userSchema.methods.generateCreatedAt = function () {
  this.createdAt = Math.round(Date.now() / 1000);
};

userSchema.methods.updateModifiedAt = function () {
  this.modifiedAt = Math.round(Date.now() / 1000);
};

userSchema.methods.getUserData = function () {
  return {
    email: this.email,
    role: this.role,
    handle: this.handle,
    avatarImage: this.avatarImage,
    createdAt: this.createdAt,
    modifiedAt: this.modifiedAt,
  };
};

userSchema.pre("save", function (next) {
  this.generateRefreshToken();
  this.updateModifiedAt();
  this.generateCreatedAt();

  this.avatarImage =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E";

  next();
});

function validateUser(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    handle: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(5).max(1024).required(),
    role: Joi.number().integer().min(ROLES.BUYER_ID).max(ROLES.SELLER_ID),
  });
  return schema.validate(user);
}

const User = model("Users", userSchema);

exports.User = User;
exports.validateUser = validateUser;
