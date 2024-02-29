const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cardSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
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
