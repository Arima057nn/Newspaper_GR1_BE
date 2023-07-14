const express = require("express");
const {
  getAllSubCategory,
  createSubCategory,
  getDetailSubCategory,
} = require("../controllers/subCategoryController");
const router = express.Router();

router.get("/", getAllSubCategory);
router.post("/create", createSubCategory);
router.get("/info", getDetailSubCategory);

module.exports = router;
