import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  foodName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    required: false,
  },
  ingredients: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

export const foodModel = model("food", foodSchema);
