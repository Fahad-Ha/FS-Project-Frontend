import React from "react";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <>
      <NavLink to="/recipes">
        <div className="flex flex-row w-full justify-evenly gap-4">
          <div className="card w-full md:w-1/3 lg:w-1/4  xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <figure>
              <img className="bg-form-img h-32 xl:h-44 w-full" alt="Recipe" />
            </figure>
            <div className="card-body ">
              <img src={`http://localhost:5000/api/recipes${recipe.image}`} />
              <div className="card-title "> {recipe.name}</div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Breakfast</div>
                <div className="badge badge-outline">Japanese</div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default RecipeCard;
