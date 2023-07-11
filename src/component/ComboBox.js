import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const ComboBox = () => {
  const [selectedIngredients, setSelectedIngredients] = React.useState([]);

  const ingredientOptions = [
    { label: "Ingredient 1", value: "ingredient1" },
    { label: "Ingredient 2", value: "ingredient2" },
    { label: "Ingredient 3", value: "ingredient3" },
    // Add more options as needed
  ];
  const onCreate = (value) => {
    console.log(value);

    return { label: value, value };
  };
  const handleIngredientChange = (selected) => {
    setSelectedIngredients(selected);
  };

  console.log(selectedIngredients);

  return (
    <div>
      <MultiSelect
        onCreateOption={onCreate}
        isCreatable={true}
        options={ingredientOptions}
        value={selectedIngredients}
        onChange={handleIngredientChange}
        labelledBy="Select ingredients"
      />
      <button
        className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        onClick={() => window.my_modal_5.showModal()}
      ></button>
    </div>
  );
};

export default ComboBox;
