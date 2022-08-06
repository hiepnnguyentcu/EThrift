const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 1024,
  },
  sellerHandle: {
    type: String,
    required: true,
    maxLength: 256,
  },
  brief: {
    type: String,
    required: true,
    max: 256,
  },
  description: {
    type: String,
    required: true,
    max: 1024,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
  },
});

productSchema.methods.getProductData = function () {
  const productData = {
    name: this.name,
    brief: this.brief,
    description: this.description,
    sellerHandle: this.sellerHandle,
    price: this.price,
    image: this.image,
    categories: this.categories,
  };

  return productData;
};

productSchema.methods.getProductBrief = function () {
  const productBrief = {
    id: this._id,
    name: this.name,
    brief: this.brief,
    price: this.price,
    image: this.image,
    categories: this.categories,
  };

  return productBrief;
};

function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().max(1024).required(),
    brief: Joi.string().max(256).required(),
    description: Joi.string().max(1024).required(),
    sellerHandle: Joi.string().max(256).required(),
    price: Joi.number().positive().precision(2).required(),
    image: Joi.string().uri().required(),
    categories: Joi.array().items(Joi.string()).unique(),
  });
  return schema.validate(product);
}

const product = model("Products", productSchema);

exports.Product = product;
exports.validateProduct = validateProduct;
