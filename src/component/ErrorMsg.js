import React from "react";

const ErrorMsg = ({ error, color }) => {
  console.log(error);
  if (!error) return "";
  return (
    <div
      className={
        color == "green"
          ? `bg-green-500 text-white px-4 py-3 mb-2 rounded-md text-sm text-center`
          : "bg-red-500  text-white px-4 py-3 mb-2 rounded-md text-sm text-center "
      }
    >
      <p>
        {error?.response?.data?.message ||
          error?.response?.data ||
          error?.message}
      </p>
    </div>
  );
};

export default ErrorMsg;
