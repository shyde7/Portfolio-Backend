require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const commentRoutes = require("./commentRoutes.js");

const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(
  cors({
    origin: "https://sean-hyde-portfolio.vercel.app", // Replace with your actual Vercel frontend URL
    methods: "GET,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((err) => console.error("Connection error", err));

app.use("/api/comments", commentRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
