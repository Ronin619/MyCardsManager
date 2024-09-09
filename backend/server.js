require("dotenv").config({ path: "../.env.local" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const https = require("https");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;
const mongoURL = process.env.DATABASE_URL;
const cardRoutes = require("./src/routes/cardRoutes");
const userRoutes = require("./src/routes/userRoutes");
const tokenRoutes = require("./src/routes/tokenRoutes");
const { requireAuth } = require("./src/middleware/requireAuth");

// Load SSL certificates
const privateKey = Buffer.from(process.env.SSL_KEY, "base64").toString("utf8");
const certificate = Buffer.from(process.env.SSL_CERT, "base64").toString(
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
};

// Set up the HTTPS server
const httpsServer = https.createServer(credentials, app);

//middleware
app.use(
  cors({
    origin: ["https://localhost:5173", "https://tcgvault.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Handle preflight requests
app.options("*", cors());

app.use(cookieParser());
app.use(express.json());

app.use("/signUp", userRoutes);
app.use("/login", userRoutes);
app.use("/logout", userRoutes);
app.use("/verifyToken", tokenRoutes);

app.use(requireAuth);
app.use("/findAllUsersCards", requireAuth, cardRoutes);
app.use("/filteredCards", requireAuth, cardRoutes);
app.use("/createCard", requireAuth, cardRoutes);
app.use("/deleteCard", requireAuth, cardRoutes);
app.use("/editCard", requireAuth, cardRoutes);

app.get("/test-cors", (req, res) => {
  res.json({ message: "CORS headers are working!" });
});

mongoose
  .connect(mongoURL)
  .then(() => {
    httpsServer.listen(port, "0.0.0.0", () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
