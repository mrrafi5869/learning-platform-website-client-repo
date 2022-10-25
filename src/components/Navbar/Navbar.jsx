import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`Navbar ${theme}`}>
        <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="flex">
            <img src="data:image/png;base64,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" className="w-12 h-12 rounded-full mr-4" alt="" />
            <Link to='/' className="btn btn-ghost normal-case text-xl">11Minute School</Link>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 mr-4">
          <li className="font-semibold">
            <Link to='/course'>Course</Link>
          </li>
          <li className="font-semibold">
            <Link to='/faq'>FAQ</Link>
          </li>
          <li className="font-semibold">
            <Link to='/blog'>Blog</Link>
          </li>
          <li className="font-semibold">
            <Link to='/login'>Login</Link>
          </li>
          <li className="font-semibold">
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </div>
        <button className="font-semibold mr-10 bg-blue-600 text-white py-2 px-4 rounded-lg ease-in duration-100 hover:bg-sky-400" onClick={toggleTheme}>Light</button>
    </div>
    </div>
  );
};

export default Navbar;
