import instance from ".";

const getRecipes = async () => {
  const res = await instance.get("/recipes");
  return res.data;
};

export { getRecipes };
