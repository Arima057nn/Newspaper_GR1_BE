const express = require("express");
const {
  getAllArticle,
  createArticle,
  getDetailArticle,
  getArticleById,
  getArtBySubCategoryId,
} = require("../controllers/articleController");
const router = express.Router();

router.get("/", getAllArticle);
router.get("/:id", getArticleById);
router.get("/subCategory/:subCateId", getArtBySubCategoryId);
router.get("/info", getDetailArticle);
router.post("/create", createArticle);

module.exports = router;
