import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
const ServiceDetails = ({provide}) => {
    return (
      <div className="col-md-4 text-center service-card">
        <Link
          to={{
            pathname: "/order",
            state: { ...provide }
          }}
        >
          <img
            style={{ height: "50px" }}
            src={require(`../../images/${provide.img}`)}
            alt=""
          />
          <h5 className="mt-3 mb-3">{provide.title}</h5>
          <p className="text-secondary">{provide.paragraph}</p>
        </Link>
      </div>
    );
};

export default ServiceDetails;