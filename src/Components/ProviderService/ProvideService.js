import React from 'react';
import service1 from "../../images/service1.png";
import service2 from "../../images/service2.png";
import service3 from "../../images/service3.png";
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './ProvideService.css';
const provideService = [
  {
    title: "Web $ Mobile Design",
    img: service1
  },
  {
    title: "Graphic Design",
    img: service2
  },
  {
    title: "Web Development",
    img: service3
  }
];
const ProvideService = () => {
    return (
      <section className="mt-5">
        <div className="text-center mt-5">
          <h3 className="provide">
            Provide awesome <span className="service">service</span>
          </h3>
        </div>
        
        <div className="d-flex justify-content-center">
          <div className="w-75 row mt-5 pt-5">
            {provideService.map((provide) => (
              <ServiceDetails provide={provide}></ServiceDetails>
            ))}
          </div>
        </div>
      </section>
    );
};

export default ProvideService;