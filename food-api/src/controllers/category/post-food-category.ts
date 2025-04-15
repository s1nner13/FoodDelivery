import { categoryModel } from "../../models/category.model";

export const postCategoryasd = async (req, res) => {
  const { categoryName } = req.body;
  await categoryModel.create({
    categoryName,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return res.status(201).json({
    message: "Category nemegdsen",
  });
};
