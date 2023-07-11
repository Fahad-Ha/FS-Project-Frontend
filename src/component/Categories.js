import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import AddCategories from "./AddCategories";
import CategoryCard from "./CategoryCard";
import AddRecipe from "./AddRecipe";
import { FaFire } from "react-icons/fa";
import { getCategories } from "../api/category";

const Categories = () => {
  const [user, setUser] = useContext(UserContext);

  const { data: categories, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  // Sort the categories alphabetically by name
  const sortedCategories = categories?.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const categoryList = sortedCategories?.map((category) => (
    <CategoryCard key={category.id} category={category} />
  ));

  return (
    <>
      <div className="h-[40%] card bg-base-100 rounded-box place-items-center">
        <h3 className="mt-2 text-xl font-bold">Choose a category</h3>

        <div className="flex flex-row justify-center gap-2 lg:gap-10 flex-wrap mt-[1%] xl:mt-[6%]">
          {categoryList}

          <AddCategories />
        </div>
        <div className="divider"></div>
        <div className="h-[60%] card bg-base-300 rounded-box place-items-center">
          <h3 className="flex mt-[1%] text-xl mb-[1%] xl:mb-12 items-center font-bold">
            Or see what's trending
            <FaFire className="text-red-500 ml-2" />
          </h3>
          <div className="flex flex-row w-full justify-evenly gap-4">
            <div className="card w-full md:w-1/3 lg:w-1/4  xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
              <figure>
                <img className="bg-form-img h-32 xl:h-44 w-full" alt="Recipe" />
              </figure>
              <div className="card-body ">
                <h3 className="card-title ">Japanese Breakfast</h3>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Breakfast</div>
                  <div className="badge badge-outline">Japanese</div>
                </div>
              </div>
            </div>
            <div className="card w-full md:w-1/3 lg:w-1/4  xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
              <figure>
                <img className="bg-form-img h-32 xl:h-44 w-full" alt="Recipe" />
              </figure>
              <div className="card-body ">
                <h3 className="card-title ">American Breakfast</h3>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Breakfast</div>
                  <div className="badge badge-outline">American</div>
                </div>
              </div>
            </div>
            <div className="card w-full md:w-1/3 lg:w-1/4  xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
              <figure>
                <img className="bg-form-img h-32 xl:h-44 w-full" alt="Recipe" />
              </figure>
              <div className="card-body ">
                <h3 className="card-title ">American Breakfast</h3>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Breakfast</div>
                  <div className="badge badge-outline">American</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
