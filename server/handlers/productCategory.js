const {
  validateProductCategory,
  ProductCategory,
} = require("../models/productCategory");

exports.addProductCategory = async function (req, res) {
  try {
    const categoryData = req.body;

    const { err } = validateProductCategory(categoryData);

    if (err) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const category = new ProductCategory(categoryData);

    await category.save();

    return res.status(200).json(category.getCategoryData());
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

exports.editProductCategory = async function (req, res) {
  try {
    const categoryData = req.body;
    const oldCategoryData = await ProductCategory.findById(
      req.params.id
    ).exec();

    if (!oldCategoryData) {
      return res
        .status(400)
        .json({ message: "Product category doesn't exist" });
    }

    const newCategoryData = {
      ...oldCategoryData.getBriefCategoryData(),
      ...categoryData,
    };

    const { err } = validateProductCategory(newCategoryData);

    if (err) {
      return res.status(400).json({ message: error.details[0].message });
    }

    for (let key in newCategoryData) {
      oldCategoryData[key] = newCategoryData[key];
    }

    await oldCategoryData.save();

    return res.status(200).json(oldCategoryData.getCategoryData());
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

exports.deleteProductCategory = async function (req, res) {
  try {
    const id = req.params.id;
    const category = await ProductCategory.findById(id).exec();
    if (!category) {
      return res
        .status(400)
        .json({ message: "Product category doesn't exist" });
    }

    await ProductCategory.deleteOne({ _id: id });

    return res
      .status(200)
      .json({ message: "Product category deleted successfully" });
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};

exports.getAllProductCategories = async function (req, res) {
  try {
    const categories = await ProductCategory.find().exec();
    const responseData = categories.map((category) =>
      category.getCategoryData()
    );

    return res.status(200).json(responseData);
  } catch {
    return res.status(500).json({ message: "Something went wrong." });
  }
};
