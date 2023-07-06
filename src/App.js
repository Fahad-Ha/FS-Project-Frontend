import { NavLink, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="h-[100vh] w-[100vw]">
        <nav className="navbar bg-gray-100 h-[10%] flex flex-row justify-between">
          <a className="btn btn-ghost normal-case text-xl text-gray-900 ">
            MunchMap
          </a>
          <ul
            tabIndex={0}
            className="menu menu-sm z-[1] shadow bg-gray-100 rounded-box flex flex-row  text-gray-900 "
          >
            <li>
              <NavLink exact to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="h-[100%] ">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
