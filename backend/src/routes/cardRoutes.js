const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.get("/", cardController.findAllUsersCards);
router.post("/newCard", cardController.createCard);
router.delete("/:id", cardController.deleteCard);
router.put("/:id", cardController.editCard);

module.exports = router;
