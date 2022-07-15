const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema, model } = mongoose;

const productCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const validateProductCategory = function (productCategory) {
  const schema = Joi.object({
    name: Joi.string(),
  });

  return schema.validate(productCategory);
};

const productCategory = model("ProductCategories", productCategorySchema);

exports.ProductCategory = productCategory;
exports.validateProductCategory = validateProductCategory;
