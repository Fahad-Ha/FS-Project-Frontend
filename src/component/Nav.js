import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { Theme, Button, useTheme, Navbar, Menu } from "react-daisyui";
import ThemeContext from "../context/ThemeContext";
import { logout } from "../api/auth";
import UserContext from "../context/UserContext";

const Nav = () => {
  const [darkMode, setDarkMode] = useContext(ThemeContext);
  const [user, setUser] = useContext(UserContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to toggle dark mode here (e.g., update CSS classes, theme, etc.)
  };
  function logOUT() {
    logout();
    setUser(false);
  }

  return (
    <Theme data-Theme={darkMode ? "dark" : "light"}>
      <Navbar className="navbar  h-[10%] flex flex-row justify-between">
        <Link to="/">
          <Button className=" text-xl normal-case font-semibold">
            MunchMap
          </Button>
        </Link>
        <ul
          tabIndex={0}
          className="menu menu-sm lg:menu-md  z-[1] shadow-lg  rounded-box flex flex-row  mr-[1%]"
        >
          {user ? (
            <>
              <li>
                <NavLink className="border-r-4" exact to="/" onClick={logOUT}>
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className="border-r-4" exact to="/categories">
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink className="border-r-4" exact to="/login">
                  Login
                </NavLink>
              </li>
            </>
          )}
          <span className="mx-2"> {darkMode ? <FaMoon /> : <FaSun />}</span>
          <div className="flex">
            <input
              type="checkbox"
              className="toggle"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          </div>
        </ul>
      </Navbar>
    </Theme>
  );
};

export default Nav;
