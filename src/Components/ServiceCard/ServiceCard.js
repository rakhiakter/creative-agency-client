import React from 'react';

const ServiceCard = ({serv}) => {
    return (
      <div>
        <div className="col-md-5 listCard">
          <div className="row">
            <img
              className=" serviceImg"
              src={require("../../images/service1.png")}
              alt=""
            />
            <button className="pending">
              <span className="pendingBtn">Pending</span>
            </button>
          </div>
          <h5>{serv.title}</h5>

          <p>
           {serv.paragraph }
          </p>
        </div>
      </div>
    );
};

export default ServiceCard;