const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.post("/createCard", cardController.createCard);

module.exports = router;
