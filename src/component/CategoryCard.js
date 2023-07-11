import React from "react";
import { Button } from "react-daisyui";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <>
      <NavLink to="/">
        <button className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out normal-case">
          {category?.name}
        </button>
      </NavLink>
    </>
  );
};

export default CategoryCard;
