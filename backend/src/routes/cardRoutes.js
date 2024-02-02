const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.post("/", cardController.createCard);

module.exports = router;
