import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { addIngredient, recipeIngrediants } from "../api/ingredient";
import { addCategory, getCategories } from "../api/category";
import ErrorMsg from "./ErrorMsg";

const ComboBoxCategory = ({ selectedIngredients, setSelectedIngredients }) => {
  const queryClient = useQueryClient();

  const { data: ingredients } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  const { mutate: addIngredientFun, error } = useMutation({
    mutationFn: (e) => addCategory(e),
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });

  const ingredientOptions = ingredients
    ? ingredients.map((ingredient) => {
        return { label: ingredient.name, value: ingredient._id };
      })
    : [];

  // [
  //   { label: "Ingredient 1", value: "ingredient1" },
  //   { label: "Ingredient 2", value: "ingredient2" },
  //   { label: "Ingredient 3", value: "ingredient3" },
  //   { label: "Ingredient 4", value: "ingredient4" },
  //   { label: "Ingredient 5", value: "ingredient5" },
  //   { label: "Ingredient 6", value: "ingredient6" },
  //   { label: "Ingredient 7", value: "ingredient7" },
  //   { label: "Ingredient 8", value: "ingredient8" },
  //   // Add more options as needed
  // ];

  const fixThis = (d2) => {
    setTimeout(() => {
      setSelectedIngredients(
        selectedIngredients.filter((d) => d.value !== d2.value)
      );
    }, 100);
  };

  const onCreate = (value) => {
    addIngredientFun({ name: value });
    fixThis({ value });
    return { label: value, value };
  };
  const handleIngredientChange = (selected) => {
    setSelectedIngredients(selected);
  };

  return (
    <div>
      <ErrorMsg error={error} />
      <div className="mt-2"></div>
      <MultiSelect
        onCreateOption={onCreate}
        isCreatable={true}
        options={ingredientOptions}
        value={selectedIngredients}
        onChange={handleIngredientChange}
        labelledBy="Select ingredients"
      />
      {/* <button
        className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        onClick={() => window.my_modal_5.showModal()}
      ></button> */}
    </div>
  );
};

export default ComboBoxCategory;
