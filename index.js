const express = require("express");
const db = require("./configs/db");
const studentRouter = require("./routers/studentRouter");
const categoryRouter = require("./routers/categoryRouter");
const subCategoryRouter = require("./routers/subCategoryRouter");
const authorRouter = require("./routers/authorRouter");
const articleRouter = require("./routers/articleRouter");
const bodyParser = require("body-parser");

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

app.use("/api/student", studentRouter);
app.use("/api/category", categoryRouter);
app.use("/api/subCategory", subCategoryRouter);
app.use("/api/author", authorRouter);
app.use("/api/article", articleRouter);

app.listen(POST, () => {
  console.log(`Example app listening on POST ${POST}`);
});
