import React from "react";
import "../styles/Navbar.css";

import logo from "../images/milogo.png";
const Navbar = () => {
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img
            src={logo}
            alt="Not Loaded"
            style={{ height: "50px", width: "50px", borderRadius: "20px" }}
          />
        </a>
      </div>
      <a className="navlinks" href="/miphones">
        Mi Phones
      </a>
      <a className="navlinks" href="/redmiphones">
        Redmi Phones
      </a>
      <a className="navlinks" href="/tv">
        TV
      </a>
      <a className="navlinks" href="/laptops">
        Laptops
      </a>
      <a className="navlinks" href="/lifestyle">
        Fitness & Lifestyle
      </a>
      <a className="navlinks" href="/home">
        Home
      </a>
      <a className="navlinks" href="/audio">
        Radio
      </a>
      <a className="navlinks" href="/accessories">
        Accessories
      </a>
      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        {searchIcon}
      </div>
    </div>
  );
};

export default Navbar;
