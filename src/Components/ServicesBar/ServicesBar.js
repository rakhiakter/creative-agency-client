import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const ServicesBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand ml-5" href="#">
            <Link to="/">
              <img
                style={{ width: "120.26px", height: "56px" }}
                src={require("../../images/logo.png")}
                alt=""
              />
            </Link>
          </a>

          <div>
            <h3 className=" nav-link mr-5 activity">Services List</h3>
            <p style={{ marginLeft: "1000px", marginBottom: "50px" }}>
              {loggedInUser && loggedInUser.name}
            </p>
          </div>
        </nav>
      </div>
    );
};

export default ServicesBar;