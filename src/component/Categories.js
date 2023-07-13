import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import AddCategories from "./AddCategories";
import CategoryCard from "./CategoryCard";
import AddRecipe from "./AddRecipe";
import { FaFire } from "react-icons/fa";
import { getCategories } from "../api/category";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "./RecipeCard";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    centerMode: true,
  };

  return (
    <>
      <div className="h-[32%] card bg-base-100 rounded-box">
        <h3 className="mt-2 text-xl inline-block font-bold text-center my-2 ">
          Choose a category
        </h3>
        <div className="slider-container  my-auto ">
          <Slider className="slider-wrapper" {...settings}>
            {categoryList && categoryList.length > 0 ? (
              categoryList.map((category, index) => (
                <div key={index} className="slider-item mt-4 justify-center">
                  {category}
                </div>
              ))
            ) : (
              <div>No categories found</div>
            )}
          </Slider>
        </div>

        {user?.decoded?.isStaff ? (
          <div className="justify-center mx-auto mt-6">
            <AddCategories />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="divider"></div>

      <div className=" md:h-[60%]sm:h-screen card bg-base-100 rounded-box place-items-center">
        <h3 className="flex mt-[1%] text-xl mb-[1%] xl:mb-12 items-center  font-bold">
          Or see what's trending
          <FaFire className="text-red-500 ml-2" />
        </h3>
        {/*<!-- Component: Three columns even layout --> */}
        <section>
          <div className="container px-6 m-auto pb-8 pt-10  xl:pt-12">
            <div className="grid grid-cols-4  gap-20 md:grid-cols-8 lg:grid-cols-12 ">
              <div className="col-span-4 ">
                {" "}
                <div className="card w-full  xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <figure>
                    <img
                      className="bg-form-img h-32 xl:h-44 w-full"
                      alt="Recipe"
                    />
                  </figure>
                  <div className="card-body ">
                    <h3 className="card-title">Japanese Breakfast</h3>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Breakfast</div>
                      <div className="badge badge-outline">Japanese</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                {" "}
                <div className="card w-full  xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <figure>
                    <img
                      className=" h-32 xl:h-44 bg-form-img w-full"
                      alt="Recipe"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">American Breakfast</h3>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Breakfast</div>
                      <div className="badge badge-outline">American</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                {" "}
                <div className="card w-full  xl:w-96 bg-base-100 shadow-xl hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                  <figure>
                    <img
                      className="bg-form-img h-32 xl:h-44 w-full"
                      alt="Recipe"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">American Breakfast</h3>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">Breakfast</div>
                      <div className="badge badge-outline">American</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- End Three columns even layout --> */}
      </div>
    </>
  );
};

export default Categories;
