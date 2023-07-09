import React from "react";
import { useQuery } from "react-query";
import { getCategories } from "../../api/categories";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  console.log(categories);

  const categoryList = categories?.map((category) => <CategoryCard />);
  return <div>{categoryList}</div>;
};

export default CategoryList;
