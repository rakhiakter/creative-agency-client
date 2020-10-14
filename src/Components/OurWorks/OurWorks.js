import React from 'react';
import './OurWorks.css';
const OurWorks = () => {
    return (
      <div className="workArea">
        <div className="text-center mt-5">
          <h3 className="provide">
            <span style={{color: "#FFFFFF"}}> Here are some of</span>{" "}
            <span className="service">Our work</span>
          </h3>
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide mt-5"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../../images/carousel-1.png")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../../images/carousel-2.png")}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src={require("../../images/carousel-3.png")}
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
};

export default OurWorks;