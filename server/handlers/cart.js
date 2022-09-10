const { ROLES } = require("../constants/role");
const { Cart, validateCart } = require("../models/cart");

// Create an Order
exports.createCart = async function (req, res) {
  try {
    let { seller, products } = req.body;
    let buyer = req.user.handle;

    let cartData = { buyer, seller, products };

    let { error } = validateCart(cartData);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let cart = new Cart(cartData);

    if (!cart.validateSeller()) {
      return res.status(400).json({ message: "Seller's Data Not Valid." });
    }

    await cart.save();

    return res
      .status(200)
      .json({ message: "Cart created successfully!", ...cart.getData() });
  } catch {
    return res.status(500).json({ message: "Something is wrong." });
  }
};

// Update an Order
exports.updateCart = async function (req, res) {
  try {
    let { products } = req.body;

    let cart = Cart.findById(req.params.cartID).exec();

    if (!cart) {
      return res.status(400).json({ message: "Cart not found" });
    }

    if (req.user.handle != cart.buyer) {
      return res.status(401).json({ message: "User not allowed." });
    }

    cart.products = products;

    let { error } = validateCart(cart.getData());

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    if (!cart.validateSeller()) {
      return res.status(400).json({ message: "Seller's Data Not Valid." });
    }

    await cart.save();

    return res
      .status(200)
      .json({ message: "Cart created successfully!", ...cart.getData() });
  } catch {
    return res.status(500).json({ message: "Something is wrong." });
  }
};

// Delete an Order
exports.deleteCart = async function (req, res) {
  try {
    const cart = await Cart.findById(req.params.orderID).exec();

    if (!cart) {
      return res.status(400).json({ message: "Cart not found" });
    }

    if (req.user.role != ROLES.ADMIN_ID) {
      if (req.user.handle != cart.buyer) {
        return res.status(401).json({ message: "User not allowed." });
      }
    }

    await Cart.deleteOne({ _id: req.params.cartID });
  } catch {
    return res.status(500).json({ message: "Something is wrong." });
  }
};

// Get Carts By Buyers and Admin with price
exports.getCarts = async function (req, res) {
  try {
    let role = req.user.role;
    let carts;
    switch (role) {
      case ROLES.ADMIN_ID:
        carts = await Cart.find().exec();
        break;
      case ROLES.BUYER_ID:
        carts = await Cart.find({ buyer: req.user.handle }).exec();
        break;
      default:
        carts = [];
        break;
    }

    let responseData = carts.map((cart) => cart.getData());

    return res.status(200).json(responseData);
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};
