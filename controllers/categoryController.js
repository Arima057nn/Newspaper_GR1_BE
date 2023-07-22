const asyncHandler = require("express-async-handler");
const CategoryModel = require("../models/categoryModel");

const getAllCategory = (req, res, next) => {
  CategoryModel.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Loi server" });
    });
};

const updateCategory = (req, res, next) => {
  const { _id } = req.params;

  CategoryModel.findByIdAndUpdate(_id, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Loi server" });
    });
};

const createCategory = (req, res, next) => {
  var categoryName = req.body.categoryName;
  CategoryModel.findOne({
    categoryName: categoryName,
  })
    .then((data) => {
      if (data) {
        res.status(400).json({ error: "Category nay da ton tai" });
      } else {
        return CategoryModel.create({ categoryName: categoryName });
      }
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: "Tao category that bai" });
    });
};

module.exports = { getAllCategory, createCategory, updateCategory };
