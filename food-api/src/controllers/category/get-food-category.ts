import { categoryModel } from "../../models/category.model";

export const getCategory = async (req, res) => {
  const categories = await categoryModel.find({});

  return res.status(200).json({
    categories,
  });
};
