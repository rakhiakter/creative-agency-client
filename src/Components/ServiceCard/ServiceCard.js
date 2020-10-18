import React from 'react';

const ServiceCard = ({serv}) => {
    console.log(serv);
    return (
      <div>
        <div className="col-md-5 listCard">
          <div className="row">
            {serv.img !== undefined &&
              (serv.img.substring(0, 3) === "htt" ? (
                <img className=" serviceImg" src={serv.img} alt="" />
              ) : (
                <img
                  className=" serviceImg"
                  src={require(`../../images/${serv.img}`)}
                  alt=""
                />
              ))}
            <button className="pending">
              <span className="pendingBtn">Pending</span>
            </button>
          </div>
          <h5>{serv.title}</h5>

          <p>{serv.paragraph}</p>
        </div>
      </div>
    );
};

export default ServiceCard;