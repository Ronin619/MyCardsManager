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
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  marketValue: {
    type: String,
  },
});

module.exports = mongoose.model("cardModel", cardSchema);
