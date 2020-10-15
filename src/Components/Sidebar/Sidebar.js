import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
    return (
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul>
          <li>
            {" "}
            <Link to="/order">
              <img
                src={require("../../images/shopping-cart-outline 1.png")}
                alt=""
              />
              <p>Order</p>
            </Link>
          </li>

          <li>
            <Link to="/serviceList">
              <img
                src={require("../../images/hard-drive-outline 1.png")}
                alt=""
              />
              <p>Service list</p>
            </Link>
          </li>

          <li>
            <Link to="/reviewList">
              <img
                src={require("../../images/review 1368.png")}
                alt=""
              />
              <p>Review</p>
            </Link>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;