import React from 'react';
import { Link } from 'react-router-dom';

const ServicesBar = () => {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a class="navbar-brand ml-5" href="#">
            <Link to="/">
              <img
                style={{ width: "120.26px", height: "56px" }}
                src={require("../../images/logo.png")}
                alt=""
              />
            </Link>
          </a>

          <div>
            <h3 class=" nav-link mr-5 activity">Services List</h3>
          </div>
        </nav>
      </div>
    );
};

export default ServicesBar;