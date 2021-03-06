import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ServiceBar from '../ServiceBar/ServiceBar';
import ServiceCard from '../ServiceCard/ServiceCard';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css';


const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://creative-agency-abc.herokuapp.com/getOrder/" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) =>{ 
        console.log(data);
        setService(data)});
     
  }, []);
    return (
      <section>
        <ServiceBar></ServiceBar>
        <div  className="container-fluid row">
            <Sidebar></Sidebar>

          <div className="row col-md-10 d-flex">
            {service.map((serv) => (
              <ServiceCard serv={serv}></ServiceCard>
            ))}
          </div>
        </div>
      </section>
    );
};

export default ServiceList;