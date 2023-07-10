import React from "react";

const ErrorMsg = ({ error }) => {
  if (!error) return "";
  return (
    <div className="flex items-center justify-center ">
      <div className="alert alert-error w-[100%] my-[1%] z-10 xl:w-[100%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>
          {" "}
          {error?.response?.data == "Bad Request"
            ? "Fields cannot be empty"
            : error?.response?.data?.message ==
              "data and salt arguments required"
            ? "Fields cannot be empty"
            : error?.response?.data?.message ||
              error?.response?.data ||
              error?.message}
        </span>
      </div>
    </div>
  );
};

export default ErrorMsg;
