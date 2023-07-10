import React from "react";
import { Button } from "react-daisyui";
import { NavLink, Navigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  console.log(category);
  return (
    <>
      <div className="flex flex-row gap-10 flex-wrap">
        <div>
          <NavLink to="/">
            <Button className="card w-36 h-28 flex flex-row bg-base-100 shadow-xl border-2 hover:bg-sky-700 cursor-pointer normal-case text-lg">
              {category?.name}
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
