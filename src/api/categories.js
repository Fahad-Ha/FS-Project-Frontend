import instance from ".";

const getCategories = async () => {
  const res = await instance.get("/categories");
  return res.data;
};

export { getCategories };
