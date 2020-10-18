import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import AdminBar from '../AdminBar/AdminBar';

import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './MakeAdmin.css';

const Style = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const MakeAdmin = () => {
  const alert = useAlert()
  const [admin, setAdmin] = useState({})
  const handleBlur = e => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin);
  }
   

  
  const handleSubmit = () => {
    if (admin.email === '') {
      alert.error("please set your email")
    }
    else{
 
       const formData = new FormData()
    formData.append('email', admin.email)
    fetch('http://localhost:5000/makeAdmin', {
      method: 'POST',
      body: formData
    })
     .then(response => response.json())
    .then(data => {
      console.log(data);
      alert.success("Successfully done!")
      document.querySelector("#input-email").value = ""
    })
    .catch(error => {
      console.error(error);
     alert.error("Oh look, there is some error!")
    })
  }
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
                  id="input-email"
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