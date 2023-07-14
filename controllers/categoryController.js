const asyncHandler = require("express-async-handler");
const CategoryModel = require("../models/categoryModel");

const getAllCategory = (req, res, next) => {
  CategoryModel.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json("Loi server");
    });
};

const createCategory = (req, res, next) => {
  var categoryName = req.body.categoryName;
  CategoryModel.findOne({
    categoryName: categoryName,
  })
    .then((data) => {
      if (data) {
        res.json("category nay da ton tai");
      } else {
        return CategoryModel.create({ categoryName: categoryName });
      }
    })
    .then((data) => {
      res.json("Tao category thanh cong");
    })
    .catch((err) => {
      res.status(500).json("Tao category that bai");
    });
};

module.exports = { getAllCategory, createCategory };
