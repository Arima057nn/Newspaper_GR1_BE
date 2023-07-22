const express = require("express");
const {
  getAllSubCategory,
  createSubCategory,
  getDetailSubCategory,
  getSubCategoryByCategory,
  updateSubCategory,
} = require("../controllers/subCategoryController");
const router = express.Router();

router.get("/", getAllSubCategory);
router.get("/:categoryId", getSubCategoryByCategory);
router.post("/create", createSubCategory);
router.get("/info", getDetailSubCategory);
router.put("/:_id", updateSubCategory);

module.exports = router;
