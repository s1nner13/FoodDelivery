import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  user: {
    type: String,
    required: false,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  foodOrderItems: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

export const orderModel = model("order", orderSchema);
