import instance from ".";

const getCategories = async () => {
  const res = await instance.get("/categories");
  return res.data;
};

const addCategory = async (name) => {
  const res = await instance.post("/categories", name);
  return res.data;
};

export { getCategories, addCategory };
