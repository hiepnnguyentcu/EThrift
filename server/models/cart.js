const mock = {
  buyer: "",
  seller: "",
  cartID: "buyer-seller",
  products: [
    {
      productID: "fds",
      quantity: 01,
      size: "",
      note: "",
    },
  ],
};

const mongoose = require("mongoose");
const Joi = require("joi");

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

const Cart = new Schema({
  buyer: {
    type: String,
  },
  seller: {
    type: String,
  },
  products: [OrderItem],
});

// Create a Cart

// Update a Cart

// Delete a Cart

// Get Carts // Buyer
