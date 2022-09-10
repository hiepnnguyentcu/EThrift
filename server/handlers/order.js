const { Order, validateOrder } = require("../models/order");
const { ROLES } = require("../constants/role");
// Buyers Only
exports.createOrder = async function (req, res) {
  try {
    let { seller, addressID, products } = req.body;
    let buyer = req.user.handle;

    const { error } = validateOrder({ buyer, seller, addressID, products });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let order = new Order();

    order.createOrder(buyer, seller, addressID, products);

    if (!order.validateSeller()) {
      return res.status(400).json({ message: "Seller's Data Not Valid." });
    }

    if (!order.validateAddress()) {
      return res
        .status(400)
        .json({ message: "Address doesn't belong to this user." });
    }

    await order.save();
    return res
      .status(200)
      .json({ message: "Order successfully!", ...order.getData() });
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

exports.setShippingOrder = async function (req, res) {};
exports.setPaidOrder = async function (req, res) {};

// Only admin and seller
exports.deleteOrder = async function (req, res) {
  try {
    const order = await Order.findById(req.params.orderID).exec();

    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }

    if (req.user.role != ROLES.ADMIN_ID) {
      if (req.user.handle != order.seller) {
        return res.status(401).json({ message: "User not allowed." });
      }
    }

    await Order.deleteOne({ _id: req.params.orderID });
    return res.status(200).json({ message: "Order Deleted Successfully." });
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

// Get All Orders
exports.getOrders = async function (req, res) {
  try {
    let role = req.user.role;
    let orders;
    switch (role) {
      case ROLES.ADMIN_ID:
        orders = await Order.find().exec();
        break;
      case ROLES.BUYER_ID:
        orders = await Order.find({ buyer: req.user.handle }).exec();
        break;
      case ROLES.SELLER_ID:
        orders = await Order.find({ seller: req.user.handle }).exec();
        break;
      default:
        orders = [];
        break;
    }

    let responseData = orders.map((order) => order.getData());

    return res.status(200).json(responseData);
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};
