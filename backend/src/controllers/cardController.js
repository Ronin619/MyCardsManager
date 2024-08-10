const cardModel = require("../models/cardModel");
const user = require("../models/usersModel");
const requireAuth = require("../middleware/requireAuth");

//GET: Get all cards by user
const findAllUsersCards = async (req, res) => {
  try {
    const user_id = req.user._id;
    const allCards = await cardModel.find({ user_id });

    res.status(200).json(allCards);
  } catch (error) {
    console.error("Error fetching user cards:", error);
    res.status(500).json({ error: "Server error while fetching user cards" });
  }
};

//POST: post new card
const createCard = async (req, res) => {
  const { name, set, cardNumber, quantity, marketValue } = req.body;

  try {
    const user_id = req.user._id;
    const newCard = await cardModel.create({
      user_id,
      name,
      set,
      cardNumber,
      quantity,
      marketValue,
    });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update card details
const editCard = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await cardModel.findByIdAndUpdate(id, req.body);
    if (!update) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a card
const deleteCard = async (req, res) => {
  const { id } = req.params;

  const result = await cardModel.findOneAndDelete({ _id: id });
  if (!result) {
    return res.status(400).json({ error: "card does not exist." });
  }
  res.status(200).json(result);
};

module.exports = { createCard, findAllUsersCards, deleteCard, editCard };
