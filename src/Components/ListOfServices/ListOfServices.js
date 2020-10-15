import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import ServicesBar from '../ServicesBar/ServicesBar';

const Styles = {
  backgroundColor: "#F4FDFB",
  height: "100%"
};
const ListOfServices = () => {
    return (
      <section>
        <ServicesBar></ServicesBar>
        <div style={Styles} className="container-fluid row">
          <div className="col-md-2 bar">
            <AdminSideBar></AdminSideBar>
          </div>
          <div className="col-md-10 ">
            <table style={{ width: "100%" }}>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Service</th>
                <th>Project Details</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Eve</td>
                <td>Jackson</td>
                <td>94</td>
              </tr>
            </table>
          </div>
          
        </div>
      </section>
    );
};

export default ListOfServices;