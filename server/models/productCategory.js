const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema, model } = mongoose;

const productCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

productCategorySchema.methods.getCategoryData = function () {
  return {
    id: this._id,
    name: this.name,
    image: this.image,
  };
};

productCategorySchema.methods.getBriefCategoryData = function () {
  return {
    name: this.name,
    image: this.image,
  };
};

const validateProductCategory = function (productCategory) {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().domain({
      allowFullyQualified: true,
      allowUnicode: true,
    }),
  });

  return schema.validate(productCategory);
};

const productCategory = model("ProductCategories", productCategorySchema);

exports.ProductCategory = productCategory;
exports.validateProductCategory = validateProductCategory;
