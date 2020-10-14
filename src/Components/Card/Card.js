import React from 'react';
import './Card.css';
const Card = (props) => {
    const {img,name,from,quote} = props.feedback;
    return (
      <div className="card shadow-sm">
        <div className="card-footer d-flex  align-items-center">
          <img
            className="mx-3"
            src={require(`../../images/${img}`)}
            alt=""
            width="60"
          />
          <div>
            <h6 className="name">{name}</h6>
            <p className="m-0 address">{from}</p>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text text-center">{quote}</p>
        </div>
      </div>
    );
};

export default Card;