const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema, model } = mongoose;

const { Product } = require("./product");
const { UserAddress } = require("./userAddress");

const orderItemSchema = new Schema({
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

const orderSchema = new Schema({
  buyer: {
    type: String,
  },
  seller: {
    type: String,
  },
  createdAt: {
    type: Number,
  },
  isPaid: {
    type: Boolean,
  },
  transactionID: {
    type: String,
  },
  isShipping: {
    type: Boolean,
  },
  shipmentID: {
    type: String,
  },
  addressID: {
    type: String,
  },
  total: {
    type: Number,
  },
  products: [orderItemSchema],
});

const validateOrder = (data) => {
  const itemSchema = Joi.object({
    productID: Joi.string().required(),
    size: Joi.string().allow(""),
    variation: Joi.string().allow(""),
    note: Joi.string().max(1024),
    quantity: Joi.number().min(1).required(),
  });

  const schema = Joi.object({
    buyer: Joi.string().min(5).max(255).required(),
    seller: Joi.string().min(5).max(255).required(),
    addressID: Joi.string().required(),
    products: Joi.array()
      .items(itemSchema)
      .unique((a, b) => a.productID === b.productID)
      .required(),
  });

  return schema.validate(data);
};

orderSchema.methods.createOrder = function (
  buyer,
  seller,
  addressID,
  products
) {
  this.buyer = buyer;
  this.seller = seller;
  this.addressID = addressID;
  this.products = products;
  this.createdAt = Math.round(Date.now() / 1000);
  this.isPaid = false;
  this.transactionID = "";
  this.isShipping = false;
  this.shipmentID = "";

  this.calculateTotal();
};

orderSchema.methods.calculateTotal = async function () {
  let total = 0;

  for (let product of this.products) {
    let productID = product.productID;

    let productData = await Product.findById(productID).exec();

    if (productData) {
      total += productData.price;
    }
  }

  this.total = total;
};

orderSchema.methods.validateSeller = async function () {
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

orderSchema.methods.validateAddress = async function () {
  let address = await UserAddress.findById(this.addressID).exec();
  if (!address) {
    return false;
  }
  if (address.userHandle !== this.buyer) {
    return false;
  }
  return true;
};

orderSchema.methods.setPaid = async function (paid, transactionID) {
  this.isPaid = paid;
  this.transactionID = transactionID;
};

orderSchema.methods.setShipping = async function (shipping, shipmentID) {
  this.isShipping = shipping;
  this.shipmentID = shipmentID;
};

orderSchema.methods.getData = function () {
  return {
    orderID: this._id,
    buyer: this.buyer,
    seller: this.seller,
    createdAt: this.createdAt,
    isPaid: this.isPaid,
    transactionID: this.transactionID,
    isShipping: this.isShipping,
    shipmentID: this.shipmentID,
    addressID: this.addressID,
    total: this.total,
    products: this.products,
  };
};

const Order = model("Orders", orderSchema);

exports.Order = Order;
exports.validateOrder = validateOrder;

// Create Order // buyer
// buyer seller address products

// Set Order Paid and Transaction ID State // Admin

// Set Order Shipped State and Shipment ID // Admin and Seller

// Get all orders // Admin, Buyer, Seller

// Delete Order // Admin and Seller
