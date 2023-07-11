import instance from ".";

const recipeIngrediants = async () => {
  const res = await instance.get("/ingredients");
  return res.data;
};

export { recipeIngrediants };
