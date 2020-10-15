import React from 'react';
import { useState } from 'react';
import OrderBar from '../OrderBar/OrderBar';

import Sidebar from '../Sidebar/Sidebar';
import './Order.css';


const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Order = () => {
  const [order, setOrder] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newOrder = { ...order };
    newOrder[e.target.name] = e.target.value;
    setOrder(newOrder);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(order);
    formData.append("file", file);
    formData.append("name", order.name);
    formData.append("email", order.email);
    formData.append("graphic", order.graphic);
    formData.append("project", order.project);
    formData.append("price", order.price);
    
    fetch("https://salty-plateau-71286.herokuapp.com/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
    return (
      <section>
        <OrderBar></OrderBar>
        <div style={containerStyle} className="container-fluid row">
          <div className="col-md-2 bar">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-5 ">
            <form class="mt-5" onSubmit={handleSubmit}>
              <div class="form-group">
                <input
                  onBlur={handleBlur}
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Your name/Company's name"
                />
              </div>
              <div class="form-group">
                <input
                  onBlur={handleBlur}
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder=" Your email address "
                />
              </div>
              <div class="form-group">
                <input
                  onBlur={handleBlur}
                  type="text"
                  class="form-control"
                  name="graphic"
                  placeholder="Graphic design"
                />
              </div>
              <div class="form-group">
                <textarea
                  onBlur={handleBlur}
                  name="project"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Project details"
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  onBlur={handleBlur}
                  type="text"
                  class="form-control"
                  name="price"
                  placeholder="Price"
                />
              </div>
              <div className="form-group">
                <input type="file" id="actual-btn" hidden />
                <label for="actual-btn">
                  <img
                    className="cloud"
                    src={require("../../images/cloud-upload-outline 1.png")}
                    alt=""
                  />
                  <span className="font">Upload project file</span>
                </label>
              </div>
              <button type="submit" className="order">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-5"></div>
        </div>
      </section>
    );
};

export default Order;