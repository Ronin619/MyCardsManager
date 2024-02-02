require("dotenv").config({ path: "./.env.local" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 8080;
const mongoURL = process.env.DATABASE_URL;

//middleware
app.use(cors());
app.use(express.json());

const cardRoutes = require("./backend/src/routes/cardRoutes");

app.use("/createCard", cardRoutes);

mongoose
  .connect(mongoURL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
