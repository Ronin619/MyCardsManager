import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

//dotenv configs
const { config } = dotenv;
config({ path: "../.env.local" });
const port = process.env.PORT || 3000;
const mongoURL = process.env.DATABASE_URL;

//middleware
app.use(cors());
app.use(express.json());

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

export default app;
