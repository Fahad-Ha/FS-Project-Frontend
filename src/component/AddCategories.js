import React, { useState } from "react";
import { Input } from "react-daisyui";
import { FaPlus } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "../api/category";

const AddCategories = () => {
  const [categoryName, setCategoryName] = useState("");
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorState, setErrorState] = useState(null);
  const [successState, setSuccessState] = useState(false);

  const { mutate: addCategoryFun, isLoading: addCategoryFunLoading } =
    useMutation({
      mutationFn: () => {
        return addCategory({ name: categoryName });
      },
      onError: (error) => {
        setErrorState(error.response?.data?.message);
        setSuccessState(false);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["categories"]);
        setCategoryName("");
        closeModal();
        setSuccessState(true);
      },
    });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(categoryName);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setErrorState(null);
    setSuccessState(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCategoryName("");
    setErrorState(null);
    setSuccessState(false);
  };

  return (
    <div className="text-center">
      <button
        className="btn btn-lg hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        onClick={openModal}
      >
        <FaPlus className="text-green-500 " />
      </button>
      <div className="mt-4">
        {successState && (
          <p className="text-green-500 text-sm font-semibold xl:text-lg">
            Category added successfully!
          </p>
        )}
      </div>
      <dialog
        id="my_modal_5"
        className={`modal modal-bottom sm:modal-middle ${
          isModalOpen ? "modal-open" : ""
        }`}
      >
        <form
          onSubmit={handleFormSubmit}
          method="dialog"
          className="modal-box custom-modal-box "
        >
          <button
            onClick={closeModal}
            className="btn btn-square absolute right-2 top-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3 className="font-bold text-lg mb-4 mt-8">Add a new category</h3>

          <Input
            name="name"
            type="text"
            placeholder="New category"
            className={`input input-bordered mt-[5%] ${
              errorState ? "input-error" : ""
            }`}
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
          {errorState && (
            <p className="text-red-500 mt-1 text-sm font-semibold xl:text-lg">
              {errorState}
            </p>
          )}

          <div className="modal-action">
            <button
              onClick={addCategoryFun}
              disabled={addCategoryFunLoading}
              type="submit"
              className="btn btn-accent btn-sm md:btn-md xl:btn-lg mx-auto capitalize"
            >
              {addCategoryFunLoading ? (
                <span className="loading loading-spinner loading-sm xl:loading-md"></span>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddCategories;
