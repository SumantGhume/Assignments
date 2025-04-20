import React from "react";
import Logo from "../assets/Images/Sabzi.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <div className="px-4 py-2 bg-white border-bottom sticky-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <a href="/" className="text-decoration-none">
          <img src={Logo} alt="Logo" style={{ height: "40px" }} />
        </a>

        <ul className="list-unstyled d-flex mb-0 gap-4">
          <li>
            <a href="#" className="text-dark text-decoration-none fw-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none fw-medium">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-dark text-decoration-none fw-medium">
              About
            </a>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-4">
          <i className="bi bi-search fs-5 text-success cursor-pointer"></i>
          <i className="bi bi-cart fs-5 text-success cursor-pointer">o</i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
