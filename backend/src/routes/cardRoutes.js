const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.get("/", cardController.findAllCards);
router.post("/", cardController.createCard);

module.exports = router;
