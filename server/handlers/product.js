// createProduct buyerOnly
// getProduct all
// getAllProduct all

const { Product, validateProduct } = require("../models/product");

exports.createProduct = async function (req, res) {
  const productData = req.body;
  productData.sellerHandle = req.user.handle;

  const { error } = validateProduct(productData);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  try {
    const product = new Product(productData);
    await product.save();

    return res.status(200).json(productData);
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

exports.getProduct = async function (req, res) {
  try {
    const product = await Product.findById(req.params.productID).exec();

    return res.status(200).json(product.getProductData());
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

exports.getAllProduct = async function (req, res) {
  try {
    const products = await Product.find().exec();
    const responseData = products.map((product) => product.getProductBrief());

    return res.status(200).json(responseData);
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};
