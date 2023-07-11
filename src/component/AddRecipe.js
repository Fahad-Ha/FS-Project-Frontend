import React, { useState } from "react";
import { Input } from "react-daisyui";
import { FaPlus } from "react-icons/fa";
import ComboBox from "./ComboBox";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [Steps, setSteps] = useState("");
  const [addCategory, setaddCategory] = useState("");
  const [ListCategory, setListCategory] = useState([]);

  function recipesName_(e) {
    setRecipeName(e.target.value);
  }

  function theSteps(e) {
    setSteps(e.target.value);
  }

  const handleChange = (e) => {
    setaddCategory(e.target.value);
  };
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
        <form method="dialog" className="modal-box custom-modal-box">
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
              type="text"
              placeholder="Your recipe's name"
              onChange={recipesName_}
              className="input input-bordered  xl:input-md w-full  my-1"
            />

            <label>Choose category:</label>
            <select class="select select-bordered w-full max-w-xs my-1">
              <option disabled selected>
                Choose category:
              </option>
              <option>Japanese</option>
              <option>Italian</option>
              <option>Labanese</option>
              <option>Turkish</option>
              <option>Thai</option>
              <option>Sea Food</option>
              <option>Steaks</option>
              <option>Indian</option>
              <option>Chicken</option>
              <option>Breakfast</option>
              <option>Dinner</option>
              <option>Dessert</option>
              <option>Beverages</option>
            </select>
            <label>Insert a photo</label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs xl:file-input-md my-1"
            />
            <label>Add ingredients:</label>
            <ComboBox />
            <label>Steps:</label>
            <textarea
              placeholder="Steps"
              onChange={theSteps}
              className="textarea textarea-bordered textarea-md w-full max-w-xs  my-1"
            ></textarea>
            <div className="modal-action">
              <button className="btn btn-accent btn-sm md:btn-md lg:btn-md xl:btn-md mx-auto capitalize">
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
