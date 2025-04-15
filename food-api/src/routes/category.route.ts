import { Router } from "express";
import { getCategory } from "../controllers/category/get-food-category";
import { postCategoryasd } from "../controllers/category/post-food-category";

const categoryRouter = Router();

categoryRouter.get("/", getCategory).post("/", postCategoryasd);
export default categoryRouter;
