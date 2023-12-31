import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { FaExclamationCircle } from "react-icons/fa";
import { isError, useMutation } from "@tanstack/react-query";
import { checkToken, register } from "../api/auth";
import ErrorMsg from "../component/ErrorMsg";

const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [passwordLength, setPasswordLength] = useState(0);
  const [passwordConfirmLength, setPasswordConfirmLength] = useState(0);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

    if (name === "password") {
      setPasswordLength(value.length);
      setPasswordMismatch(
        value !== userInfo.confirmPass ||
          passwordConfirmLength !== passwordLength
      );
    } else if (name === "confirmPass") {
      setPasswordConfirmLength(value.length);
      setPasswordMismatch(
        value !== userInfo.password && passwordConfirmLength >= 7
      );
    }
  };

  const { mutate: registerFn, error } = useMutation({
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser({ decoded: decoded });
        navigate("/categories");
      }
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerFn();
  };

  return (
    <div className="bg-form-img  h-[100%] py-[2%] w-auto justify-center mx-auto ">
      <div className="card w-96 glass max-w-screen-md mx-auto h-[100%] backdrop-blur-2xl xl:w-[40%] ">
        <div className="card-body ">
          <h2 className="card-title text-3xl justify-center text-center md:my-[2%] xl:mt-[25%] xl:text-5xl 2xl:mt-[10%]">
            Register
          </h2>

          <form
            onSubmit={handleFormSubmit}
            className="xl:my-[30%] 2xl:my-[15%] "
          >
            <ErrorMsg error={error} />

            <label className="label">Username</label>
            <input
              name="username"
              type="text"
              onChange={handleChange}
              placeholder="Username"
              className="input md:input-md input-sm xl:input-lg opacity-70 w-full max-w-xs my-[0%] md:my-[1%] focus-visible:border-0 focus-visible:ring-0 xl:max-w-5xl
          "
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="Email"
              className="input input-sm md:input-md xl:input-lg  opacity-70 w-full max-w-xs my-[1%] focus-visible:border-0 focus-visible:ring-0 xl:max-w-5xl
  "
              required
            />
            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
                className={`input md:input-md input-sm xl:input-lg  opacity-70 w-full max-w-xs my-[1%] focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-offset-2 xl:max-w-5xl ${
                  passwordLength >= 7 && passwordMismatch
                    ? "ring-2 ring-red-500"
                    : ""
                }`}
                required
              />
            </div>
            <div className="relative">
              <label className="label">Confirm Password</label>
              <input
                name="confirmPass"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                className={`input md:input-md input-sm xl:input-lg  opacity-70 w-full max-w-xs my-[1%] focus-visible:border-0 focus-visible:ring-0 xl:max-w-5xl ${
                  passwordConfirmLength >= 7 && passwordMismatch
                    ? "ring-2 ring-red-500"
                    : ""
                }`}
                required
              />
              {passwordConfirmLength >= 7 && passwordMismatch && (
                <FaExclamationCircle
                  color="red"
                  className="absolute top-[70%] right-[5%] transform -translate-y-1/2"
                />
              )}
            </div>
            {passwordConfirmLength >= 7 && passwordMismatch && (
              <p className="text-red-500 mt-1 text-sm font-semibold absolute xl:text-lg ">
                Password and Confirm Password do not match.
              </p>
            )}
            <div className="card-actions justify-center">
              <button
                type="submit"
                className="w-[100%]  opacity-90 px-4 py-2 font-bold rounded-lg bg-orange-500 hover:bg-orange-600 text-gray-200 mt-[8%] xl:text-2xl"
              >
                Register
              </button>
              <p className="text-center xl:text-xl">
                Already have an account ?{" "}
                <Link className="underline" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
