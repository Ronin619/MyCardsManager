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
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
  },
});

module.exports = mongoose.model("cardModel", cardSchema);
