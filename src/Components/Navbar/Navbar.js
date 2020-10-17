import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <a class="navbar-brand ml-5" href="#">
          <Link to="/"> 
            
            <img
              style={{ width: "120.26px", height: "50px" }}
              src={require("../../images/logo.png")}
              alt=""
            />
          </Link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link mr-5" href="#">
                Home
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mr-5 " href="#">
                Our Portfolio
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mr-5 " href="#">
                Our Team
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link mr-5 " href="#">
                Contact Us
              </a>
            </li>
            <Link to="/login">
              <button class="button">Login</button>
            </Link>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;