const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, maxlength: 160, default: "" },
  },
  {
    timestamps: true,
    collection: "categories",
  }
);

const CategoryModel = mongoose.model("categories", CategorySchema);

module.exports = CategoryModel;
