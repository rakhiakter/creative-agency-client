import React, { useEffect, useState } from 'react';
import ServiceBar from '../ServiceBar/ServiceBar';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css';

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const ServiceList = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http:/localhost:5000/getOrder")
      .then((res) => res.json())
      .then((data) => setService(data));
      console.log(service);
  }, []);
    return (
      <section>
        <ServiceBar></ServiceBar>
        <div style={containerStyle} className="container-fluid row">
          <div className="col-md-2 bar">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-5 listCard">
            <div className="row">
              <img  className=" serviceImg"src={require("../../images/service1.png")} alt="" />
              <button className="pending"><span className="pendingBtn">Pending</span></button>
            </div>
            <h5>Web & design</h5>
            
            <p>
              We craft stunning and amazing web UI, <br/>
              using a well drrafted UX to
              fit your product.
            </p>
          </div>
          <div className="col-md-5"></div>
        </div>
      </section>
    );
};

export default ServiceList;