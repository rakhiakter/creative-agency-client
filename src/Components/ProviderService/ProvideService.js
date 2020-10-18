import React, { useEffect, useState } from 'react';

import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './ProvideService.css';

const ProvideService = () => {
       const [serviceData, setServiceData] = useState([]);
       useEffect(() => {
         fetch("http://localhost:5000/getService")
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             setServiceData(data);
           });
       }, []);



    return (
      <section className="mt-5">
        <div className="text-center web">
          <h3 className="provide headline ">
            Provide awesome <span className="service">service</span>
          </h3>
        </div>

        <div className="d-flex justify-content-center graphic">
          <div className="w-75 row mt-5 pt-5">
            {serviceData .slice(0, 3).map((provide) => (
              <ServiceDetails provide={provide}></ServiceDetails>
            ))}
          </div>
        </div>
      </section>
    );
};

export default ProvideService;