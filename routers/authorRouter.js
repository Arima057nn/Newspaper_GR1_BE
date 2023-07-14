const express = require("express");
const {
  getAllAuthor,
  createAuthor,
} = require("../controllers/authorController");
const router = express.Router();

router.get("/", getAllAuthor);
router.post("/create", createAuthor);

module.exports = router;
