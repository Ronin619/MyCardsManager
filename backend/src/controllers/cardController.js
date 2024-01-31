import cardModel from "../models/cardModel";

const postCard = async (req, res) => {
  try {
    const { name, set, cardNumber, quantity, value } = req.body;
    const newCard = new cardModel({
      name,
      set,
      cardNumber,
      quantity,
      value,
    });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    if (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default postCard;
