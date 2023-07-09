import instance from ".";
import jwt_decode from "jwt-decode";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/login", userInfo);
    storeToken(data.token);

    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  // const formData = new FormData();  because we have an image for registeration so we create a **formData.**
  // for (const key in userInfo) formData.append(key, userInfo[key]);   // if i have a formData, replace useInfo with forData.

  const { data } = await instance.post("/auth/register", userInfo);
  storeToken(data.token);
  return data;
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem("token");
};

export { login, register, checkToken, logout };
