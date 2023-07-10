import React from "react";
import AddCategories from "./AddCategories";
import { FaFire } from "react-icons/fa";

const Categories = () => {
  return (
    <>
      <div className="flex flex-col h-full w-full">
        <div className="h-[40%] card bg-base-300 rounded-box place-items-center">
          <h3 className="mt-2 text-xl">Choose a category</h3>
          <div className="flex flex-row justify-center gap:6 lg:gap-10 flex-wrap mt-[1%] xl:mt-[6%]">
            <button className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Japanese
            </button>
            <button className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Breakfast
            </button>
            <button className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Lunch
            </button>
            <button className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Japanese
            </button>
            <button className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Beverages
            </button>
            <button className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Japanese
            </button>{" "}
            <button className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Japanese
            </button>{" "}
            <button className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Japanese
            </button>{" "}
            <button className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              Japanese
            </button>
            <AddCategories />
          </div>
        </div>
        <div className="divider"></div>
        <div className="h-[60%] card bg-base-300 rounded-box place-items-center">
          <h3 className="flex mt-[1%] text-xl mb-[1%] xl:mb-12 items-center">
            Or see what's trending
            <FaFire className="text-red-500 ml-2" />
          </h3>
          <div className="flex flex-row w-full justify-evenly ">
            <div className="card w-[25%]  xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
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
            <div className="card w-[25%] xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
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
            <div className="card w-[25%] xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
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
