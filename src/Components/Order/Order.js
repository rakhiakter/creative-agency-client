import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Order.css';


const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const Order = () => {
    return (
      <section>
        <div style={containerStyle} className="container-fluid row">
          <div className="col-md-2">
           
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Your name/Company's name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder=" Your email address "
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Graphic design"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Project details"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Price"
                />
              </div>
              <div className="form-group">
                
                <input
                 
                  type="file"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Picture"
                />
              </div>
              <button className="order">Send</button>
            </form>
          </div>
          <div className="col-md-5"></div>
        </div>
      </section>
    );
};

export default Order;