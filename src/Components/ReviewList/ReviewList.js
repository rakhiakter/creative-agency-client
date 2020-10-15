import React from 'react';
import ReviewBar from '../ReviewBar/ReviewBar';
import Sidebar from '../Sidebar/Sidebar';
import './ReviewList.css';
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const ReviewList = () => {
    return (
      <section>
        <ReviewBar></ReviewBar>
        <div style={containerStyle} className="container-fluid row">
          <div className="col-md-2 bar">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-5">
            <form class="mt-5">
              <div class="form-group">
                <input
                  //   onBlur={handleBlur}
                  type="text"
                  name="name"
                  class="form-control style"
                  placeholder="Your name"
                />
              </div>
              <div class="form-group">
                <input
                  //   onBlur={handleBlur}
                  type="text"
                  class="form-control"
                  name="company"
                  placeholder="Company's name,Designation"
                />
              </div>
              <div class="form-group">
                <textarea
                  name="description"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Description "
                ></textarea>
              </div>
              <button type="submit" className="order">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-5"></div>
        </div>
      </section>
    );
};

export default ReviewList;