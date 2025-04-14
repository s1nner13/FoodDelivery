import { Router } from "express";
import { getCategory } from "../controllers/category/get-food-category";
import { postCategory } from "../controllers/category/post-food-category";

const categoryRouter = Router();

categoryRouter.get("/", getCategory).post("/", postCategory);
export default categoryRouter;
