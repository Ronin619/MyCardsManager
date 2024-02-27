const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/user", userController.signUpNewUser);
router.post("/loginUser", userController.logInUser);

module.exports = router;
