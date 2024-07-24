const user = require("../models/usersModel");
const jwt = require("jsonwebtoken");

// verify authentication
const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.log("No token found in cookies");
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    const foundUser = await user.findById(_id);

    if (!foundUser) {
      return res.status(401).json({ error: "User not found" });
    }
    req.user = foundUser;
    next();
  } catch (error) {
    console.log("JWT verification error:", error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = { requireAuth };
