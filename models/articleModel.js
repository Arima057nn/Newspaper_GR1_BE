const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    articleName: { type: String, maxlength: 1600, default: "" },
    tittle: { type: String },
    header: { type: String },
    content: { type: String },
    content1: { type: String },
    content2: { type: String },
    authorId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "authors",
      require: true,
    },
    subCategoryId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "subCategories",
      require: true,
    },
    level: { type: Number },
    image: {
      type: String,
      maxlength: 1000,
      default:
        "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    },
    imageTittle: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "articles",
  }
);

const ArticleModel = mongoose.model("articles", ArticleSchema);

module.exports = ArticleModel;
