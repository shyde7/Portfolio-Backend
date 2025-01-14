require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const commentRoutes = require("./commentRoutes.js");

const app = express();

app.use(
  cors({
    origin: "https://sean-hyde-portfolio.vercel.app", // Replace with your actual Vercel frontend URL
    methods: "GET,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);
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
