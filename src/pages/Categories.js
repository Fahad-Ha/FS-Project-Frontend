import React from "react";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/Categories/CategoryCard";
import CategoryList from "../components/Categories/CategoriesList";

const Categories = () => {
  return (
    <div className="mt-5 px-5">
      <SearchBar />
      <div className="mt-8">
        <CategoryCard />
        <CategoryList />
      </div>
      <hr className="mt-10"></hr>
    </div>
  );
};

export default Categories;
