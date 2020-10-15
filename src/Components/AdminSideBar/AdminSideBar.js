import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
      <div>
        <div
          className=" sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
          style={{ height: "100vh" }}
        >
          <ul className="list-unstyled">
            <li>
              {" "}
              <Link to="/listOfServices">
                <img
                  className="cart"
                  src={require("../../images/hard-drive-outline 1.png")}
                  alt=""
                />
                <p class="pb">Services list</p>
              </Link>
            </li>

            <li>
              <Link to="/addService">
                <img
                  className="cart"
                  src={require("../../images/plus 1.png")}
                  alt=""
                />
                <p class="pb"> Add Service</p>
              </Link>
            </li>

            <li>
              <Link to="/makeAdmin">
                <img
                  className="cart"
                  src={require("../../images/person-add-outline 1.png")}
                  alt=""
                />
                <p class="pb">Make Admin</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default AdminSideBar;