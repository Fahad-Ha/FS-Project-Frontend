import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

import { useNavigate } from "react-router-dom";
import { isError, useMutation } from "react-query";
import { checkToken, register } from "../api/auth";
import { Navigate } from "react-router-dom/dist";
import ErrorMsg from "../component/ErrorMsg";

const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const { mutate: registerFn, error } = useMutation({
    mutationFn: () => register(userInfo),
    onError: (error) => alert(error),
    onSuccess: () => {
      if (localStorage.getItem("token")) {
        setUser(true);
        navigate("/");
      }
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerFn();
    // console.log(userInfo);
  };

  return (
    <div className="bg-gray-100 h-[100%] bg-form-img">
      <div className=" text-white h-[100%] w-auto justify-center mx-auto ">
        <div className="card w-96 glass mx-auto">
          <div className="card-body justify-center">
            <h2 className="card-title text-3xl justify-center text-center my-2">
              Register
            </h2>
            <form onSubmit={handleFormSubmit}>
              <ErrorMsg error={error} />
              <label>Username</label>
              <input
                name="username"
                type="text"
                onChange={handleChange}
                placeholder="Username"
                className="input opacity-70 w-full max-w-xs"
              />
              <label>Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Email"
                className="input opacity-70 w-full max-w-xs"
              />
              <label>Password</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
                className="input opacity-70 w-full max-w-xs"
              />
              <label>Confirm Password</label>
              <input
                name="confirmPass"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                className="input opacity-70 w-full max-w-xs"
              />
              <div className="card-actions justify-center">
                <button
                  type="submit"
                  className="opacity-90 px-4 py-2 mr-2 rounded bg-orange-500 hover:bg-orange-600 text-white mt-6"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
