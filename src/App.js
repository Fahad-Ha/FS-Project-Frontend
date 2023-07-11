import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import UserContext from "./context/UserContext";
import Nav from "./component/Nav";
import ThemeContext from "./context/ThemeContext";
import { Theme } from "react-daisyui";
import Categories from "./component/Categories";
import Recipe from "./component/Recipe";

function App() {
  // const decoded_token = jwt_decode(token).decoded_token;

  const [user, setUser] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(()=>{
  //   if(localStorage.getItem("token")){
  //     setUser(true);
  //   }
  // },[]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <ThemeContext.Provider value={[darkMode, setDarkMode]}>
        <Theme data-Theme={darkMode ? "dark" : "light"}>
          <div className="h-[90vh] w-[100vw]">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/recipes" element={<Recipe />} />
            </Routes>
          </div>
        </Theme>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
