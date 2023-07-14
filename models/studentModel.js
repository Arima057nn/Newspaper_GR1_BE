const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, maxlength: 160, default: "" },
  },
  {
    timestamps: true,
    collection: "category",
  }
);

const StudentModel = mongoose.model("category", StudentSchema);

module.exports = StudentModel;
