import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from "../../App";
import './Navbar.css';
const Navbar = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const [isAdmin, setIsAdmin] = useState(false);
    const logOut = () => {
      
    }
   useEffect(() => {
     fetch("https://creative-agency-abc.herokuapp.com/isAdmin", {
       method: "POST",
       headers: { "content-type": "application/json" },
       body: JSON.stringify({ email: loggedInUser.email }),
     })
       .then((res) => res.json())
       .then((data) => setIsAdmin(data));
   }, []);

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
            {loggedInUser && loggedInUser.email ? (
              <Link to="/login">
                <button class="button" onClick={logOut}>Logout</button>
              </Link>
            ) : (
              <Link to="/login">
                <button class="button">Login</button>
              </Link>
            )}
            <Link to={isAdmin === true ? "/listOfServices" : "/order"}>
              <button class="button">Admin</button>
            </Link>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;