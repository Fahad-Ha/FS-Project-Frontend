import React, { useContext, useState } from "react";
import { login } from "../api/auth";
import UserContext from "../context/UserContext";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import AddCategories from "../component/AddCategories";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { mutate: loginFn } = useMutation({
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      if (localStorage.getItem("token")) {
        setUser(true);
        navigate("/");
      } else {
        // setErrorMsg(true);
      }
    },
  });
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add login logic here
    // console.log(userInfo);
    loginFn();
  };
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="bg-form-img h-[100%] py-[2%] w-full justify-center mx-auto ">
      <div className="card w-96 glass mx-auto h-[100%] backdrop-blur-2xl xl:w-[40%]">
        <AddCategories />

        <div className="card-body over">
          <h2
            className="card-title 
            text-3xl justify-center text-center my-[2%] xl:mt-[25%] xl:text-5xl 2xl:mt-[10%]"
          >
            Login
          </h2>
          <form
            onSubmit={handleFormSubmit}
            className="xl:my-[30%] 2xl:my-[15%] w-full max-w-xs"
          >
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input opacity-70 w-full max-w-xs my-[1%] focus-visible:border-0 focus-visible:ring-0 xl:max-w-5xl
        "
              onChange={handleChange}
            />
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input opacity-70   w-full max-w-xs my-[1%] focus-visible:border-0 focus-visible:ring-0 xl:max-w-5xl
    "
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
                onClick={login}
                className="w-[100%]  font-bold opacity-90 px-4 py-2  rounded-lg bg-orange-500 hover:bg-orange-600 text-gray-200 mt-[8%] xl:text-xl"
              >
                Login
              </button>
              <p className="text-center">
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
