import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut, theme, setTheme } = useContext(AuthContext);
  const [mode, setMode] = useState(true);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setMode(true);
    } else {
      setMode(false);
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={`Navbar ${theme}`}>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-semibold">
                <Link to="/course">Course</Link>
              </li>
              <li className="font-semibold">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="font-semibold">
                <Link to="/blog">Blog</Link>
              </li>
              <>
                {user?.uid ? (
                  <li>
                    <button className="btn btn-sm mr-4" onClick={handleLogOut}>
                      Logout
                    </button>
                    <span>{user?.displayName}</span>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link className="font-semibold" to="/login">Login</Link>
                    </li>
                    <li>
                      <Link className="font-semibold" to="/register">Register</Link>
                    </li>
                  </>
                )}
              </>
            </ul>
          </div>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co/Jy5mL7z/download-3.png"
                  className="w-8 lg:w-12 h-8 lg:h-12 rounded-full"
                  alt=""
                />
                <Link
                  to="/course"
                  className="btn btn-ghost normal-case lg:text-xl text-xs"
                >
                  11Minute School
                </Link>
                <button
                  className="btn btn-sm"
                  onClick={toggleTheme}
                >
                  {mode === true ? "light" : "dark"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0 mr-4 lg:flex-row md: flex-col">
                <li className="font-semibold">
                  <Link to="/course">Course</Link>
                </li>
                <li className="font-semibold">
                  <Link to="/faq">FAQ</Link>
                </li>
                <li className="font-semibold">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="">
                  {user?.uid ? (
                    <>
                      <button
                        className="btn btn-sm mr-4"
                        onClick={handleLogOut}
                      >
                        Logout
                      </button>
                      <span>{user?.displayName}</span>
                    </>
                  ) : (
                    <>
                      <li className="font-semibold">
                        <Link to="/login">Login</Link>
                      </li>
                      <li className="font-semibold">
                        <Link to="/register">Register</Link>
                      </li>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
