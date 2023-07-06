import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

import { useNavigate } from "react-router-dom";
import { isError, useMutation } from "react-query";
import { checkToken, register } from "../api/auth";
import { Navigate } from "react-router-dom/dist";

const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const { mutate: registerFn } = useMutation({
    mutationFn: () => register(userInfo),
    onSuccess: () => setUser(checkToken()),
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerFn();
    console.log(userInfo);
    // navigate("/home");
  };

  if (user) {
    // return <Navigate to="/home" />;
  }

  return (
    <div className="bg-gray-100 ">
      <div className="bg-form-img pt-20 xl:pt-36 text-white h-[95vh] w-auto justify-center mx-auto ">
        <div className="card w-96 glass mx-auto">
          <div className="card-body justify-center">
            <h2 className="card-title text-3xl justify-center text-center my-2">
              Register
            </h2>
            <form onSubmit={handleFormSubmit}>
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
      <footer className="text-gray-900 h-10 text-center">
        <p>Made by FBA Team</p>
      </footer>
    </div>
  );
};

export default Register;
