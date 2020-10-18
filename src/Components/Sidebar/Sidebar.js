import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
    return (
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          <li>
          
            <Link to="/order">
              <img
                className="cart"
                src={require("../../images/shopping-cart-outline 1.png")}
                alt=""
              />
              <p class="pb">Order</p>
            </Link>
          </li>

          <li>
            <Link to="/serviceList">
              <img
                className="cart"
                src={require("../../images/hard-drive-outline 1.png")}
                alt=""
              />
              <p class="pb">Service list</p>
            </Link>
          </li>

          <li>
            <Link to="/reviewList">
              <img
                className="cart"
                src={require("../../images/review 1368.png")}
                alt=""
              />
              <p class="pb">Review</p>
            </Link>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;