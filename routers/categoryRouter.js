const express = require("express");
const {
  getAllCategory,
  createCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.get("/", getAllCategory);
router.post("/create", createCategory);

module.exports = router;
