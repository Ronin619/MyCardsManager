import mongoose from "mongoose";

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
    type: number,
    required: true,
  },
  value: {
    type: Number,
  },
});

export const card = mongoose.model("cardModel", cardSchema);
