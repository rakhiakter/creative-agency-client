import React from 'react';

const ServiceCard = ({serv}) => {
    console.log(serv);
    return (
      <div>
        <div className="col-md-5 listCard">
          <div className="row">

            {serv.image &&
              (typeof serv.image === "string" ? (
                <img className="img-fluid"
                  style={{ height: "50px" }}
                  src={require(`../../images/${serv.image}`)}
                  alt=""
                />
              ) : (
                <img
                  style={{ height: "200px" }}
                  src={`data:image/png;base64,${serv.image.img}`}
                />
              ))}

            <button className="pending">
              <span className="pendingBtn">{serv.orderStatus}</span>
            </button>
          </div>
          <h5>{serv.project}</h5>

          <p>{serv.detail}</p>
        </div>
      </div>
    );
};

export default ServiceCard;