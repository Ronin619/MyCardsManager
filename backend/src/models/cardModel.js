const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  set: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  marketValue: {
    type: String,
  },
});

module.exports = mongoose.model("cardModel", cardSchema);
