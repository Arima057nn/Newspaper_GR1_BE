const express = require("express");
const {
  getAllStudent,
  createStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.get("/", getAllStudent);
router.post("/register", createStudent);

module.exports = router;
