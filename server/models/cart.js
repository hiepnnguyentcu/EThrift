const mongoose = require("mongoose");
const Joi = require("joi");

const { Product } = require("./product");
const { Schema, model } = mongoose;

const CartItem = new Schema({
  productID: {
    type: String,
  },
  size: {
    type: String,
  },
  variation: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  note: {
    type: String,
  },
});

const CartSchema = new Schema({
  buyer: {
    type: String,
  },
  seller: {
    type: String,
  },
  products: [CartItem],
});

const validateCart = (data) => {
  const cartItemSchema = Joi.object({
    productID: Joi.string().required(),
    size: Joi.string().allow(""),
    variation: Joi.string().allow(""),
    note: Joi.string().max(1024),
    quantity: Joi.number().min(1).required(),
  });

  const schema = Joi.object({
    buyer: Joi.string().min(5).max(255).required(),
    seller: Joi.string().min(5).max(255).required(),
    products: Joi.array()
      .items(cartItemSchema)
      .unique((a, b) => a.productID === b.productID)
      .required(),
  });

  return schema.validate(data);
};

// Validate all items is from seller
CartSchema.methods.validateSeller = async function () {
  for (let product in this.products) {
    let productID = product.productID;

    let productData = await Product.findById(productID).exec();

    // Check if Product Exists
    if (!productData) {
      return false;
    }

    // Check if Seller is uniform
    if (productData.seller !== this.seller) {
      return false;
    }
  }
  return true;
};

// Calculate Total of Cart
CartSchema.methods.calculateTotal = async function () {
  let total = 0;

  for (let product of this.products) {
    let productID = product.productID;

    let productData = await Product.findById(productID).exec();

    if (productData) {
      total += productData.price;
    }
  }

  return total;
};

// Get Cart Data
CartSchema.methods.getData = async function () {
  return {
    id: this._id,
    buyer: this.buyer,
    seller: this.seller,
    products: this.products,
    total: await this.calculateTotal(),
  };
};

const Cart = model("Carts", CartSchema);

exports.Cart = Cart;
exports.validateCart = validateCart;
