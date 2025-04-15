import express from "express";
import foodRouter from "./routes/food.route";
import categoryRouter from "./routes/category.route";
import { connectToDatabase } from "./database/connect-to-db";
connectToDatabase();
const app = express();
const port = 3001;

app.use("/food", foodRouter).use("/food-category", categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
