import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({provide}) => {
    return (
      <div className="col-md-4 text-center">
        <Link to="/order">
          <img style={{ height: "50px" }} src={require(`../../images/${provide.img}`)} alt="" />
          <h5 className="mt-3 mb-3">{provide.title}</h5>
          <p className="text-secondary">
           {provide.paragraph}
          </p>
        </Link>
      </div>
    );
};

export default ServiceDetails;