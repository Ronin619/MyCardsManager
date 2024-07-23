require("dotenv").config({ path: "../.env.local" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const port = process.env.PORT || 8080;
const mongoURL = process.env.DATABASE_URL;
const cardRoutes = require("./src/routes/cardRoutes");
const userRoutes = require("./src/routes/userRoutes");
const { requireAuth } = require("./src/middleware/requireAuth");

// Load SSL certificates
const privateKey = fs.readFileSync("./server.key", "utf8");
const certificate = fs.readFileSync("./server.cert", "utf8");

const credentials = {
  key: privateKey,
  cert: certificate,
};

// Set up the HTTPS server
const httpsServer = https.createServer(credentials, app);

//middleware
app.use(
  cors({
    origin: "https://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/signUp", userRoutes);
app.use("/login", userRoutes);

app.use(requireAuth);
app.use("/findAllUsersCards", cardRoutes);
app.use("/createCard", cardRoutes);
app.use("/deleteCard", cardRoutes);
app.use("/editCard", cardRoutes);

mongoose
  .connect(mongoURL)
  .then(() => {
    httpsServer.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
