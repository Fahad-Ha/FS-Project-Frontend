import React from "react";
import { MultiSelect } from "react-multi-select-component";

const ComboBox = () => {
  const [selectedIngredients, setSelectedIngredients] = React.useState([]);

  const ingredientOptions = [
    { label: "Ingredient 1", value: "ingredient1" },
    { label: "Ingredient 2", value: "ingredient2" },
    { label: "Ingredient 3", value: "ingredient3" },
    // Add more options as needed
  ];

  const handleIngredientChange = (selected) => {
    setSelectedIngredients(selected);
  };

  return (
    <div>
      <MultiSelect
        options={ingredientOptions}
        value={selectedIngredients}
        onChange={handleIngredientChange}
        labelledBy="Select ingredients"
      />
    </div>
  );
};

export default ComboBox;
