import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="navbar">
      <Link to="/filter">
          <li>Filter Movie</li>
        </Link>
        <Link to="/movielist">
          <li>Movie List</li>
        </Link>

      </ul>
    </div>
  );
};

export default NavBar;
