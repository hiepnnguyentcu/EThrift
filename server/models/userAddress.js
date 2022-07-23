const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema, model } = mongoose;

const userAddressSchema = new Schema({
  userHandle: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
  },
  address: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 1024,
  },
});

userAddressSchema.methods.getBriefData = function () {
  return {
    userHandle: this.userHandle,
    address: this.address,
  };
};

userAddressSchema.methods.getData = function () {
  return {
    id: this._id,
    userHandle: this.userHandle,
    address: this.address,
  };
};

const validateUserAddress = function (productCategory) {
  const schema = Joi.object({
    userHandle: Joi.string().min(5).max(255).required(),
    address: Joi.string().min(5).max(1024).required(),
  });

  return schema.validate(productCategory);
};

const userAddress = model("UserAddresses", userAddressSchema);

exports.UserAddress = userAddress;
exports.validateUserAddress = validateUserAddress;
