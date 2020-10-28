import React from 'react';
import './BrandIcon.css';
const BrandIcon = () => {
    return (
      <div className="row brand d-flex mt-5">
          {/* <div className="col-md-1"></div> */}
        <div className="col-md-2 col-2">
          <img  src={require("../../images/slack.png")} alt="" />
        </div>
        <div className="col-md-2 col-2">
          <img src={require("../../images/google1.png")} alt="" />
        </div>
        <div className="col-md-2 col-2">
          <img src={require("../../images/uber.png")} alt="" />
        </div>
        <div className="col-md-2 col-2">
          {" "}
          <img src={require("../../images/netflix.png")} alt="" />
        </div>
        <div className="col-md-2 col-2">
          <img src={require("../../images/airbnb1.png")} alt="" />
        </div>
        {/* <div className="col-md-1"></div> */}
      </div>
    );
};

export default BrandIcon;