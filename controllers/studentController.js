const asyncHandler = require("express-async-handler");
const StudentModel = require("../models/studentModel");

const getAllStudent = (req, res, next) => {
  StudentModel.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: "Loi server" });
    });
};

const createStudent = (req, res, next) => {
  var name = req.body.name;
  StudentModel.findOne({
    name: name,
  })
    .then((data) => {
      if (data) {
        res.status(400).json({ error: "Student nay da ton tai" });
      } else {
        return StudentModel.create({ name: name });
      }
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: "Tao tai khoan that bai" });
    });
};

module.exports = { getAllStudent, createStudent };
