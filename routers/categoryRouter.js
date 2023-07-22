const express = require("express");
const {
  getAllCategory,
  createCategory,
  updateCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.get("/", getAllCategory);
router.post("/create", createCategory);
router.put("/:_id", updateCategory);

module.exports = router;
