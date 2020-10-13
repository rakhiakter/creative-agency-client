import React from 'react';

const ServiceDetails = ({provide}) => {
    return (
        <div className="col-md-4 text-center">
          <img style={{ height: "50px" }} src={provide.img} alt="" />
          <h5 className="mt-3 mb-3">{provide.title}</h5>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            nostrum!
          </p>
        </div>
    );
};

export default ServiceDetails;