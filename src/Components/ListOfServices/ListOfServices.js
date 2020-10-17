import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import ServicesBar from '../ServicesBar/ServicesBar';
import './ListOfServices.css';
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
          <div className="col-md-10 main">
            <table style={{ width: "100%",
                    marginTop:"30px"
                            }} >
              <tr id="header">
                <th>Name</th>
                <th>Email ID</th>
                <th>Service</th>
                <th>Project Details</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>Sufi Ahmed Hamim</td>
                <td>sufi@gmail.com</td>
                <td>Graphic Design</td>
                <td>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                </td>
                <td>
                  Pending

                  <img
                    className="arrow"
                    src={require("../../images/arrow-ios-downward-outline 1.png")}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Eve Ikbal</td>
                <td>eva@gmail.com</td>
                <td>Graphic Design</td>
                <td>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                </td>
                <td>
                  Done

                  <img
                    className="arrow"
                    src={require("../../images/arrow-ios-downward-outline 1.png")}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Baizid Ahmed</td>
                <td>Bai@gmail.com</td>
                <td>Graphic Design</td>
                <td>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                </td>
                <td>
                  Panding

                  <img
                    className="arrow"
                    src={require("../../images/arrow-ios-downward-outline 1.png")}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Tiya Rahman</td>
                <td>tiya@gmail.com</td>
                <td>Graphic Design</td>
                <td>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                </td>
                <td>
                  On going

                  <img
                    className="arrow"
                    src={require("../../images/arrow-ios-downward-outline 1.png")}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Niaj Mahmmud</td>
                <td>niaj@gmail.com</td>
                <td>Graphic Design</td>
                <td>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                </td>
                <td>
                  panding

                  <img
                    className="arrow"
                    src={require("../../images/arrow-ios-downward-outline 1.png")}
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td>Jamil Mia</td>
                <td>jamil@gmail.com</td>
                <td>Graphic Design</td>
                <td>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipiscing elit.
                </td>
                <td>
                  Panding

                  <img
                    className="arrow"
                    src={require("../../images/arrow-ios-downward-outline 1.png")}
                    alt=""
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    );
};

export default ListOfServices;