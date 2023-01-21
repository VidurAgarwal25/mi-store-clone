import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img
            src={logo}
            alt="Not Loaded"
            style={{ height: "50px", width: "50px", borderRadius: "20px" }}
          />
        </Link>
      </div>
      <Link className="navlinks" to="/miphones">
        Mi Phones
      </Link>
      <Link className="navlinks" to="/redmiphones">
        Redmi Phones
      </Link>
      <Link className="navlinks" to="/tv">
        TV
      </Link>
      <Link className="navlinks" to="/laptops">
        Laptops
      </Link>
      <Link className="navlinks" to="/lifestyle">
        Fitness & Lifestyle
      </Link>
      <Link className="navlinks" to="/home">
        Home
      </Link>
      <Link className="navlinks" to="/audio">
        Radio
      </Link>
      <Link className="navlinks" to="/accessories">
        Accessories
      </Link>
      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        {searchIcon}
      </div>
    </div>
  );
};

export default Navbar;
