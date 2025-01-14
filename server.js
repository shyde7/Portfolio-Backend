require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const commentRoutes = require("routes/commentRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/commentsDB");

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/api/comments", commentRoutes);

const port = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
