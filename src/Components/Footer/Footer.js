import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
      <section className="my-5 py-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <h1>
              Let us handle your project,
              <br />
              Professionally
            </h1>
            <p>
              With well written codes, we are build amazing Apps for all
              platform,mobile and Apps in general.With well written codes, we
              are build amazing Apps for all platform,mobile and Apps in
              general.
            </p>
          </div>
          <div className="col-md-6">
            <div className="col-md-9 mx-auto">
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Your email address "
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name/Company's name"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    className="form-control"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your message "
                  ></textarea>
                </div>
                <div className="form-group text-center">
                  <button type="button" className="btn btn-primary" id="send">
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Footer;