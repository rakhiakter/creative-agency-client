import React from 'react';
import './ExactHeader.css';
import people from '../../images/fram.png';
const ExactHeader = () => {
    return (
      <main className="row d-flex align-items-center mt-5">
        <div style={{ height: "600px " }} className="col-md-4 offset-md-1">
          <h1 className="headline">
            Let's Grow Your Brand To The <br />
            Next Level
          </h1>
          <p id="paragraph"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            aliquam asperiores veniam, sapiente vitae cumque.
          </p>
          <button className="btn btn-primary" id="hireBtn">Hire Us</button>
        </div>
        <div className="col-md-6">
          <img src={people} alt="" className="img-fluid" />
        </div>
      </main>
    );
};

export default ExactHeader;