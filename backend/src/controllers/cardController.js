const cardModel = require("../models/cardModel");

//POST: post new card
const createCard = async (req, res) => {
  const { name, set, cardNumber, quantity, value } = req.body;
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

//GET: Get all cards
const findAllCards = async (req, res) => {
  const allCards = await cardModel.find({});

  res.status(200).json(allCards);
};

module.exports = { createCard, findAllCards };
