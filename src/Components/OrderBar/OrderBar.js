import React from "react";
import { Link } from "react-router-dom";

const OrderBar = () => {
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

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <h3 class=" mr-auto activity">Order</h3>
             
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default OrderBar;
