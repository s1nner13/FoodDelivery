import { RequestHandler } from "express";
import { foodModel } from "../../models/food.model";

export const deleteFood: RequestHandler = async (req, res) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;
    await foodModel.deleteOne({
      foodName,
      price,
      image,
      ingredients,
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(200).json({
      message: "Food ustgagdlaa",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
