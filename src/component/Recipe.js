import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import AddRecipe from "./AddRecipe";
import { getRecipes } from "../api/recipe";
import RecipeCard from "./RecipeCard";
import CategoryCard from "./CategoryCard";
import { getCategories } from "../api/category";

const Recipe = () => {
  const [user, setUser] = useContext(UserContext);

  const { data: recipes } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes(),
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  // Sort the recipes alphabetically by name
  const sortedRecipes = recipes?.sort((a, b) => a.name.localeCompare(b.name));
  const sortedCategories = categories?.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const recipeList = sortedRecipes?.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  // const categoryList = sortedCategories?.map((category) => (
  //   <RecipeCard key={category.id} category={category} />
  // ));

  return (
    <>
      <div className="flex flex-row justify-center gap-2 lg:gap-10 flex-wrap mt-[1%] xl:mt-[6%]">
        {recipeList}
      </div>
    </>
  );
};

export default Recipe;
