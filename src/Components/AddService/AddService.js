import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import AddBar from '../AddBar/AddBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './AddService.css';



const Styles = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const AddService = () => {
  const alert = useAlert();
    const [addService, setAddService] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
      const newAddService = { ...addService };
      newAddService[e.target.name] = e.target.value;
      setAddService(newAddService);
    };

    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
    };

    const handleSubmit = (e) => {
      console.log("button clicked");
      const formData = new FormData();
      ;
      formData.append("file", file);
      formData.append("title", addService.title);
      formData.append("email", addService.paragraph);

      fetch("http://localhost:5000/addService", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert.success("submit successfully");

          document.querySelector("#placed-order").reset();
        })
        .catch((error) => {
          console.error(error);
        });
        e.preventDefault()
    };
    return (
      <section>
        <AddBar></AddBar>
        <div style={Styles} className="container-fluid row">
          <div className="col-md-2 bar">
            <AdminSideBar></AdminSideBar>
          </div>
          <div className="col-md-8 add">
            <form class="mt-5" onSubmit={handleSubmit}>
              <p>
                {" "}
                <b>Service title</b>{" "}
              </p>
              <div class="form-group">
                <input
                  onBlur={handleBlur}
                  type="text"
                  class="form-control"
                  name="title"
                  placeholder="Service title"
                />
              </div>
              <div class="form-group">
                <p>
                  <b>Description</b>
                </p>
                <textarea
                  onBlur={handleBlur}
                  name="paragraph"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Description "
                ></textarea>
              </div>
              <div>
                <input
                  type="file"
                  id="actual-btn"
                  hidden
                  onChange={handleFileChange}
                />
                <label for="actual-btn">
                  <img
                    className="cloud"
                    src={require("../../images/cloud-upload-outline 1.png")}
                    alt=""
                  />
                  <span className="font"> Upload image</span>
                </label>
              </div>
              <div className="send">
                <button class="green" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-2"></div>
        </div>
      </section>
    );
};

export default AddService;