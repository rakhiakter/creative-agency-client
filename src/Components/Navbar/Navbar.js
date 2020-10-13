import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light ">
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
            <button class="button">Login</button>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;