import React from 'react';
import './OurWorks.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
   
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  
  },
};

const images = [
  require("../../images/carousel-1.png"),
  require("../../images/carousel-2.png"),
  require("../../images/carousel-3.png"),
  require("../../images/carousel-4.png"),
  require("../../images/carousel-5.png")
];
const OurWorks = () => {
    return (
      <div className="workArea">
        <div className="text-center mt-5">
          <h3 className="provide some">
            <span style={{ color: "#FFFFFF" }}> Here are some of</span>{" "}
            <span className="service">Our work</span>
          </h3>
        </div>
        <Carousel
          ssr
          itemClass="image-item"
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {images.slice(0, 5).map((image) => {
            return (
              <img className="fluid"
                draggable={false}
                style={{ width: "80%",
                        marginTop: "15%",
                        height:"70%" }}
                src={image}
              />
            );
          })}
        </Carousel>
      </div>
    );
};

export default OurWorks;