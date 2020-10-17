import React, { useState } from 'react';
import AdminBar from '../AdminBar/AdminBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './MakeAdmin.css';
const Style = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const MakeAdmin = () => {
  const [admin, setAdmin] = useState({})
  const handleBlur = e => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  }
   
  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('email', admin.email)
    fetch('http://localhost:5000/makeAdmin', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    })
  }
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
                    name="email"
                    onBlur={handleBlur}
                  type="email"
                  class="form-control em"
                  id="inputPassword2"
                  placeholder="rak@gmail.com"
                  required
                />
              </div>
              <button type="submit" class="newBtn " onClick={handleSubmit}>
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