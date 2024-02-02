const cardModel = require("../models/cardModel");

const createCard = async (req, res) => {
  const { name, set, cardNumber, quantity, value } = req.body;
  try {
    const newCard = new cardModel({
      name,
      set,
      cardNumber,
      quantity,
      value,
    });
    await cardModel.create(newCard);
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createCard };
