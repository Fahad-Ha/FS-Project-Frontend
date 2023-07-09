import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import Nav from "./components/Nav";
import ThemeContext from "./context/ThemeContext";
import { Theme } from "react-daisyui";
import CategoriesList from "./components/Categories/CategoriesList";
import CategoryDetail from "./components/Categories/CategoryDetails";

function App() {
  const [user, setUser] = useState(false);
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
              <Route
                path="/categories/:categoryId"
                element={<CategoryDetail />}
              />
            </Routes>
          </div>
        </Theme>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
