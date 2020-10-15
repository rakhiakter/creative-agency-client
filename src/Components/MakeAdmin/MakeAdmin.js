import React from 'react';
import AdminBar from '../AdminBar/AdminBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './MakeAdmin.css';
const Style = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const MakeAdmin = () => {
    return (
      <section>
        <AdminBar></AdminBar>
        <div style={Style} className="container-fluid row">
          <div className="col-md-2 bar">
            <AdminSideBar></AdminSideBar>
          </div>
          <div className="col-md-8 make">
            <form class="form-inline admins">
              <div class="form-group  mx-sm-3  mb-2">
                <input
                  type="email"
                  class="form-control em"
                  id="inputPassword2"
                  placeholder="rak@gmail.com"
                />
              </div>
              <button type="submit" class="newBtn ">
                <span className="color"> Submit</span>
              </button>
            </form>
          </div>
          <div class="col-md-2"></div>
        </div>
      </section>
    );
};

export default MakeAdmin;