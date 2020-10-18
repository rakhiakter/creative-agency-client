import React, { useEffect, useState } from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import ServicesBar from '../ServicesBar/ServicesBar';
import './ListOfServices.css';
const Styles = {
  backgroundColor: "#F4FDFB",
  height: "100%"
};
const ListOfServices = () => {
const [serviceList, setServiceList] = useState([]);
useEffect(() => {
  fetch("http://localhost:5000/getOrder" )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setServiceList(data);
    });
}, []);


const handleChange = (e) => {
 
  
}


    return (
      <section>
        <ServicesBar></ServicesBar>
        <div style={Styles} className="container-fluid row">
          <div className="col-md-2 bar">
            <AdminSideBar></AdminSideBar>
          </div>
          <div className="col-md-10 main">
            <table style={{ width: "100%", marginTop: "30px" }}>
              <thead>
                <tr id="header">
                  <th className="text-secondary" scope="col">
                    Name
                  </th>
                  <th className="text-secondary" scope="col">
                    Email ID
                  </th>
                  <th className="text-secondary" scope="col">
                    Service
                  </th>
                  <th className="text-secondary" scope="col" Project Details>
                    Project Details
                  </th>
                  <th className="text-secondary" scope="col">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceList.map((service) => (
                  <tr>
                    <td>{service.name}</td>
                    <td>{service.email}</td>
                    <td>{service.project}</td>
                    <td>{service.detail}</td>
                    <td>
                      {service.orderStatus}
                      <select
                        class="custom-select"
                        id="dropMenu"
                        defaultValue={service.orderStatus}
                        // style={{
                        //   color: colors[service.orderStatus],
                        // }}
                        onChange={{ handleChange }}
                        id={service._id}
                      >
                        <option value="done">Done</option>
                        <option value="on going">On Going</option>
                        <option value="Pending">Pending</option>
                      
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
};

export default ListOfServices;