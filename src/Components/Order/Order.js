import React from 'react';
import { useState } from 'react';
import OrderBar from '../OrderBar/OrderBar';
import Sidebar from '../Sidebar/Sidebar';
import './Order.css';
import { useAlert } from 'react-alert';


const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Order = (props) => {
  const alert = useAlert();
  const [order, setOrder] = useState({
    orderStatus: "Pending" 
  });
  const [file, setFile] = useState(null);
var title;
var image;
if (props.location.state !== undefined){
var {title, image } = props.location.state
}
  const handleBlur = (e) => {
    const newOrder = { ...order };
    newOrder[e.target.name] = e.target.value;
    setOrder(newOrder);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    console.log(newFile);
    setFile(newFile);
  };

  const handleSubmit = (e) => {
  
    const formData = new FormData();
    console.log(order);
    if (file === null){
      alert("please select your Image")
    }else{
 formData.append("file", file);
 formData.append("name", order.name);
 formData.append("email", order.email);
 formData.append("project", order.project);
 formData.append("detail", order.detail);
 formData.append("price", order.price);
 formData.append("orderStatus", order.orderStatus);

 fetch("http://localhost:5000/addOrder", {
   method: "POST",
   body: formData,
 })
   .then((response) => response.json())
   .then((data) => {
     console.log(data);
     alert.success("Order placed successfully")
     document.querySelector("#placed-order").reset()
   })
   .catch((error) => {
     console.error(error);
   });
    }
   
      e.preventDefault();
  };
    return (
      <section>
        <OrderBar></OrderBar>
        <div style={containerStyle} className="container-fluid row">
          <div className="col-md-2 bar">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-5 ">
            <form class="mt-5" id="placed-order" onSubmit={handleSubmit}>
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
                  name="project"
                  placeholder="Project"
                  defaultValue={title}
                />
              </div>
              <div class="form-group">
                <textarea
                  onBlur={handleBlur}
                  name="detail"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Project details"
                  // defaultValue={detail}
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
                <input
                  onChange={handleFileChange}
                  type="file"
                  id="actual-btn"
                  hidden
                />
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