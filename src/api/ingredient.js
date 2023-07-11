import instance from ".";

const recipeIngrediants = async () => {
  const res = await instance.get("/ingredients");
  return res.data;
};

const addIngredient = async (data) => {
  const res = await instance.post("/ingredients", data);
  return res.data;
};

export { recipeIngrediants, addIngredient };
