import React from 'react';
import AddBar from '../AddBar/AddBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './AddService.css';
const Styles = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const AddService = () => {
    return (
      <section>
        <AddBar></AddBar>
        <div style={Styles} className="container-fluid row">
          <div className="col-md-2 bar">
            <AdminSideBar></AdminSideBar>
          </div>
          <div className="col-md-8 add">
            <form class="mt-5">
              <p>
                {" "}
                <b>Service title</b>{" "}
              </p>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="service"
                  placeholder="Service title"
                />
              </div>
              <div class="form-group">
                <p>
                  {" "}
                  <b>Description</b>{" "}
                </p>
                <textarea
                  name="description"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Description "
                ></textarea>
              </div>
              <div>
                <input type="file" id="actual-btn" hidden />
                <label for="actual-btn">
                  {" "}
                  <img
                    className="cloud"
                    src={require("../../images/cloud-upload-outline 1.png")}
                    alt=""
                  />
                  <span className="font"> Upload image</span>
                </label>
              </div>
            </form>
            <div className="send">
              <button class="green" type="submit">
                Submit
              </button>
            </div>
          </div>

          <div className="col-md-2"></div>
        </div>
      </section>
    );
};

export default AddService;