import instance from ".";

const getRecipes = async () => {
  const res = await instance.get("/recipes");
  return res.data;
};

const addRecipe = async (recipeInfo) => {
  console.log(recipeInfo);
  const formData = new FormData();
  for (const key in recipeInfo) {
    if (Array.isArray(recipeInfo[key])) {
      recipeInfo[key].forEach((item) => {
        formData.append(key, item);
      });
    } else {
      formData.append(key, recipeInfo[key]);
    }
  }
  const res = await instance.post("/recipes", formData);
  return res.data;
};

const deleteRecipe = async (recipeId) => {
  const res = await instance.delete("/recipes", { recipeId });
  return res.data;
};
export { addRecipe, getRecipes, deleteRecipe };
