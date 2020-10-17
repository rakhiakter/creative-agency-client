import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ServiceBar from '../ServiceBar/ServiceBar';
import ServiceCard from '../ServiceCard/ServiceCard';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css';

const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getOrder/" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) =>{ 
        console.log(data);
        setService(data)});
     
  }, []);
    return (
      <section>
        <ServiceBar></ServiceBar>
        <div style={containerStyle} className="container-fluid row">
          <div className="col-md-2 bar">
            <Sidebar></Sidebar>
          </div>

          <div className="row">
            {service.map((serv) => (
              <ServiceCard serv={serv}></ServiceCard>
            ))}
          </div>
        </div>
      </section>
    );
};

export default ServiceList;