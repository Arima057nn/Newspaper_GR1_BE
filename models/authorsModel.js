const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    authorName: { type: String, maxlength: 160, default: "" },
  },
  {
    timestamps: true,
    collection: "authors",
  }
);

const AuthorModel = mongoose.model("authors", AuthorSchema);

module.exports = AuthorModel;
