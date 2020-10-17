import React from 'react';
import './Card.css';
const Card = (props) => {
    const {img:pic,name,from,description} = props.feedback;
    console.log(pic);
    return (
      <div className="card shadow-sm">
        <div className="card-footer d-flex  align-items-center">
          {
            
              pic !== undefined && 
              
              (  pic.substring(0, 3) === 'htt' ? 
                <img className=" img-fluid mx-3 md-4"
                src = {pic}
                 width="60"
                 height="60"
                 />
              
              :
            <img
              className="mx-3 md-4"
              src={require(`../../images/${pic}`)}
              alt=""
              width="60"
            />)
            
          }
          <div>
            <h6 className="name">{name}</h6>
            <p className="m-0 address">{from}</p>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text text-center">{description}</p>
        </div>
      </div>
    );
};

export default Card;