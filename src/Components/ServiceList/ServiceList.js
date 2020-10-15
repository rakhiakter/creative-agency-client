import React from 'react';
import ServiceBar from '../ServiceBar/ServiceBar';
import Sidebar from '../Sidebar/Sidebar';


const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const ServiceList = () => {
    return (
      <section>
        <ServiceBar></ServiceBar>
        <div style={containerStyle} className="container-fluid row">
          <div className="col-md-2 bar">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-8 d-flex justify-content-center">
           
          </div>
          <div className="col-md-2"></div>
        </div>
      </section>
    );
};

export default ServiceList;