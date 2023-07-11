import React, { useContext, useState } from "react";
import { login, register } from "../api/auth";
import UserContext from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import ErrorMsg from "../component/ErrorMsg";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const { mutate: loginFn, error } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser({ decoded: decoded });
        navigate("/categories");
      }
    },
  });

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    loginFn();
  };
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-form-img h-[100%] py-[2%] w-full justify-center mx-auto ">
      <div className="card w-96 max-w-screen-md glass mx-auto h-[100%] backdrop-blur-2xl xl:w-[40%]">
        <div className="card-body ">
          <h2
            className="card-title 
            text-3xl justify-center text-center my-[2%] xl:mt-[25%] xl:text-5xl 2xl:mt-[10%]"
          >
            Login
          </h2>

          <form
            onSubmit={handleFormSubmit}
            className="xl:my-[30%] 2xl:my-[15%] "
          >
            <ErrorMsg error={error} />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-sm md:input-md xl:input-lg opacity-70 w-full max-w-xs my-[1%] focus-visible:border-0 focus-visible:ring-0 xl:max-w-7xl
        "
              required
              onChange={handleChange}
            />

            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-sm md:input-md opacity-70 xl:input-lg  w-full max-w-xs my-[1%] focus-visible:border-0 focus-visible:ring-0 xl:max-w-5xl
    "
                required
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute top-[70%] right-[5%] transform  -translate-y-1/2 focus:outline-none"
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <p className="text-gray-500">hide</p>
                ) : (
                  <p className="text-gray-500">Show</p>
                )}
              </button>
            </div>
            <div className="card-actions justify-center">
              <button
                type="submit"
                onClick={loginFn}
                className="w-[100%]  font-bold opacity-90 px-4 py-2  rounded-lg bg-orange-500 hover:bg-orange-600 text-gray-200 mt-[8%] xl:text-2xl"
              >
                Login
              </button>
              <p className="text-center xl:text-xl">
                Don't have an account ?{" "}
                <Link className="underline" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
