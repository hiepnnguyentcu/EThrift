// createProduct buyerOnly
// getProduct all
// getAllProduct all

const { Product, validateProduct } = require("../models/product");
const {
  validateProductCategory,
  ProductCategory,
} = require("../models/productCategory");

const { ROLES } = require("../constants/role");

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

exports.deleteProduct = async function (req, res) {
  try {
    const id = req.params.id;

    const product = await Product.findById(id).exec();

    if (!product) {
      return res.status(200).json({ message: "Product doesn't exist." });
    }

    if (req.user.role != ROLES.ADMIN_ID) {
      if (req.user.handle != product.sellerHandle) {
        return res.status(400).json({ message: "User not allowed" });
      }
    }

    await Product.deleteOne({ _id: id });

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};
