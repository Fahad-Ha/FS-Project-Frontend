import React, { useState } from "react";
import { Input } from "react-daisyui";
import { FaPlus } from "react-icons/fa";
import ComboBox from "./ComboBox";
import { addRecipe } from "../api/recipe";
import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import ComboBoxCategory from "./ComboBoxCategory";

const AddRecipe = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedIngredients2, setSelectedIngredients2] = useState([]);
  const queryClient = useQueryClient();
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.files[0] });
    } else {
      setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
    }
  };
  const { mutate: recipeMutate } = useMutation({
    mutationFn: (recipeInfo) => addRecipe(recipeInfo),
    onSuccess: () => {
      queryClient.invalidateQueries(["recipes"]);
    },
  });
  return (
    <div className="text-center">
      <label>Add Recipe</label>
      <div>
        <button
          className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          onClick={() => window.my_modal_5.showModal()}
        >
          <FaPlus className="text-green-500 " />
        </button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form
          method="dialog"
          className="modal-box custom-modal-box  bg-red-500 !w-[50000px] "
        >
          <button className="btn btn-square absolute right-2 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3 className="font-bold text-lg">Add a new Recipe</h3>
          <div className="text-left my-6">
            <label>Recipe's name:</label>
            <Input
              name="name"
              placeholder="Your recipe's name"
              className="input input-bordered  xl:input-md w-full  my-1"
              onChange={handleChange}
            />

            <label>Choose category:</label>

            <ComboBoxCategory
              selectedIngredients={selectedIngredients2}
              setSelectedIngredients={setSelectedIngredients2}
            />

            <label>Insert a photo</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="file-input file-input-bordered w-full max-w-xs xl:file-input-md my-1"
            />
            <label>Add ingredients:</label>
            <ComboBox
              selectedIngredients={selectedIngredients}
              setSelectedIngredients={setSelectedIngredients}
            />
            <label>Steps:</label>
            <textarea
              placeholder="Steps"
              name="steps "
              onChange={handleChange}
              className="textarea textarea-bordered textarea-md w-full max-w-xs  my-1"
            ></textarea>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => {
                  recipeMutate({
                    ...recipeInfo,
                    categoryId: selectedIngredients2.map((e) => e.value),
                    ingredients: selectedIngredients.map((e) => e.value),
                  });
                }}
                className="btn btn-accent btn-sm md:btn-md lg:btn-md xl:btn-md mx-auto capitalize"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddRecipe;
