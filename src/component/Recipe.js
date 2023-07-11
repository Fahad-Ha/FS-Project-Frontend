import React, { useState } from "react";
import AddRecipe from "./AddRecipe";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getRecipes } from "../api/recipe";
import RecipeCard from "./RecipeCard";

const Recipe = () => {
  const [query, setQuery] = useState("");
  const recipe = useQuery(["recipes"], () => getRecipes());
  const filterRecipes = recipe?.data?.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );
  const recipeList = filterRecipes?.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div>
      <div className="h-[40%] card bg-base-100 rounded-box place-items-center">
        <AddRecipe />
        <div className="flex flex-row justify-center gap-2 lg:gap-10 flex-wrap mt-[1%] xl:mt-[6%]">
          {recipeList}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
