import React from 'react';
import './BrandIcon.css';
const BrandIcon = () => {
    return (
      <div className="row brand mt-5">
          <div className="col-md-1"></div>
        <div className="col-md-2">
          <img  src={require("../../images/slack.png")} alt="" />
        </div>
        <div className="col-md-2">
          <img src={require("../../images/google.png")} alt="" />
        </div>
        <div className="col-md-2">
          <img src={require("../../images/uber.png")} alt="" />
        </div>
        <div className="col-md-2">
          {" "}
          <img src={require("../../images/netflix.png")} alt="" />
        </div>
        <div className="col-md-2">
          <img src={require("../../images/airbnb.png")} alt="" />
        </div>
        <div className="col-md-1"></div>
      </div>
    );
};

export default BrandIcon;