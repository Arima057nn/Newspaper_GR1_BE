const express = require("express");
const db = require("./configs/db");
const studentRouter = require("./routers/studentRouter");
const categoryRouter = require("./routers/categoryRouter");
const subCategoryRouter = require("./routers/subCategoryRouter");
const authorRouter = require("./routers/authorRouter");
const articleRouter = require("./routers/articleRouter");
const bodyParser = require("body-parser");
const cors = require("cors");

db.connectDB();

const app = express();
const POST = 5050;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.use("/api/student", cors(), studentRouter);
app.use("/api/category", cors(), categoryRouter);
app.use("/api/subCategory", cors(), subCategoryRouter);
app.use("/api/author", cors(), authorRouter);
app.use("/api/article", cors(), articleRouter);

app.listen(POST, () => {
  console.log(`Example app listening on POST ${POST}`);
});
