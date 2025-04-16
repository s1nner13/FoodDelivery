import express from "express";
import foodRouter from "./routes/food.route";
import categoryRouter from "./routes/category.route";
import { connectToDatabase } from "./database/connect-to-db";
import foodOrderRouter from "./routes/food-order.route";
connectToDatabase();
const app = express();
const port = 3001;
app.use(express.json());
app
  .use("/food", foodRouter)
  .use("/food-category", categoryRouter)
  .use("/food-order", foodOrderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
