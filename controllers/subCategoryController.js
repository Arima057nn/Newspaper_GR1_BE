const asyncHandler = require("express-async-handler");
const SubCategoryModel = require("../models/subCategoryModel");

const getAllSubCategory = (req, res, next) => {
  SubCategoryModel.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json("Loi server");
    });
};

const createSubCategory = (req, res, next) => {
  var subCategory = req.body;
  SubCategoryModel.findOne({
    subCategoryName: subCategory.subCategoryName,
  })
    .then((data) => {
      if (data) {
        res.json("subCategory nay da ton tai");
      } else {
        return SubCategoryModel.create({
          subCategoryName: subCategory.subCategoryName,
          categoryId: subCategory.categoryId,
        });
      }
    })
    .then((data) => {
      res.json("Tao subCategory thanh cong");
    })
    .catch((err) => {
      res.status(500).json("Tao subCategory that bai");
    });
};

const getDetailSubCategory = (req, res, next) => {
  SubCategoryModel.find({})
    .populate("categoryId")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { getAllSubCategory, createSubCategory, getDetailSubCategory };
