import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
      <div>
        <div
          className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
          style={{ height: "100vh" }}
        >
          <ul>
            <li>
              {" "}
              <Link to="/listOfServices">
                <img
                  src={require("../../images/hard-drive-outline 1.png")}
                  alt=""
                />
                <p>Services list</p>
              </Link>
            </li>

            <li>
              <Link to="/addService">
                <img
                  src={require("../../images/plus 1.png")}
                  alt=""
                />
                <p> Add Service</p>
              </Link>
            </li>

            <li>
              <Link to="/makeAdmin">
                <img
                  src={require("../../images/person-add-outline 1.png")}
                  alt=""
                />
                <p>Make Admin</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default AdminSideBar;