import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  foodNamde: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
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
    required: true,
  },
});

export const foodModel = model("food", foodSchema);
