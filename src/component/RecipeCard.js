import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <>
      <div className="card w-full md:w-1/3 lg:w-1/4  xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
        <figure>
          <img
            className=" h-32 xl:h-44 w-full"
            alt="Recipe"
            src={`http://localhost:5000/${recipe?.image}`}
          />
        </figure>
        <div className="card-body ">
          <h3 className="card-title ">{recipe?.name}</h3>
          <div className="card-actions justify-end">
            {recipe.categoryId?.map((category) => {
              return (
                <div className="badge badge-outline">{category?.name}</div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
