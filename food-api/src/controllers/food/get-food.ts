export const getFood = (req, res) => {
  res.json([
    { name: "food1", price: 10 },
    {
      name: "food2",
      price: 20,
    },
  ]);
};
