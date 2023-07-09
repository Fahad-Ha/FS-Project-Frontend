import React, { useState } from "react";
import { Input } from "react-daisyui";

const AddCategories = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="text-center">
      {/* Open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_5.showModal()}>
        Add a new category
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <form method="dialog" className="modal-box">
          <button className="btn btn-square absolute right-2 top-2">
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
          <h3 className="font-bold text-lg">Add a new category</h3>

          <Input
            type="text"
            placeholder="New category"
            className="input input-bordered mt-[5%]"
          />
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-accent btn-sm md:btn-md xl:btn-lg mx-auto ">
              Save
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddCategories;
