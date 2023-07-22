const asyncHandler = require("express-async-handler");
const SubCategoryModel = require("../models/subCategoryModel");

const getAllSubCategory = (req, res, next) => {
  SubCategoryModel.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Loi server" });
    });
};

const updateSubCategory = (req, res, next) => {
  const { _id } = req.params;

  SubCategoryModel.findByIdAndUpdate(_id, req.body, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Loi server" });
    });
};

const createSubCategory = (req, res, next) => {
  var subCategory = req.body;
  SubCategoryModel.findOne({
    subCategoryName: subCategory.subCategoryName,
    categoryId: subCategory.categoryId,
  })
    .then((data) => {
      if (data) {
        res.status(400).json({ error: "subCategory này đã tồn tại" });
      } else {
        return SubCategoryModel.create({
          subCategoryName: subCategory.subCategoryName,
          categoryId: subCategory.categoryId,
        });
      }
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: "Tạo subCategory thất bại" });
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

const getSubCategoryByCategory = (req, res, next) => {
  const { categoryId } = req.params;
  SubCategoryModel.find({
    categoryId: categoryId,
  })
    .populate("categoryId")
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  getAllSubCategory,
  createSubCategory,
  getDetailSubCategory,
  getSubCategoryByCategory,
  updateSubCategory,
};
