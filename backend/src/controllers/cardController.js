const cardModel = require("../models/cardModel");

//GET: Get all cards
const findAllCards = async (req, res) => {
  const allCards = await cardModel.find({});

  res.status(200).json(allCards);
};

//POST: post new card
const createCard = async (req, res) => {
  const { name, set, cardNumber, quantity, marketValue } = req.body;
  try {
    const newCard = new cardModel({
      name,
      set,
      cardNumber,
      quantity,
      marketValue,
    });
    await cardModel.create(newCard);
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a card
const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await cardModel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "The card does not exist" });
    }
    return res.status(200).send({ message: "Card successfully deleted." });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { createCard, findAllCards, deleteCard };
