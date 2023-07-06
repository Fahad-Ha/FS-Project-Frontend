import React, { useContext, useState } from "react";
import { login } from "../api/auth";
import UserContext from "../context/UserContext";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);

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
  return (
    <div className="bg-form-img text-white h-[100%] w-auto justify-center mx-auto ">
      <div className="card w-96 glass mx-auto h-[100%]">
        <figure></figure>
        <div className="card-body justify-center ">
          <form onSubmit={handleFormSubmit}>
            <h2 className="card-title text-3xl justify-center text-center my-2">
              Login
            </h2>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input opacity-70 w-full max-w-xs"
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input opacity-70 w-full max-w-xs"
              onChange={handleChange}
            />
            <div className="card-actions justify-center">
              <button
                type="submit"
                onClick={login}
                className="opacity-90 px-4 py-2 mr-2 rounded bg-orange-500 hover:bg-orange-600 text-white mt-6"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
