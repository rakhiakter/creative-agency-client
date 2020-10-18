import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from "react-spring";
import './ServiceDetails.css';
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceDetails = ({provide}) => {
const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
      <div className="col-md-4 text-center service-card">
        <Link
          to={{
            pathname: "/order",
            state: { ...provide },
          }}
        >
          <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            {provide.image &&
              (typeof provide.image === "string" ? (
                <img
                  style={{ height: "50px",
                            width: "50px",
                            marginLeft: "120px"
                        }}
                  src={require(`../../images/${provide.image}`)}
                  alt=""
                />
              ) : (
                <img
                  style={{ height: "200px" }}
                  src={`data:image/png;base64,${provide.image.img}`}
                />
              ))}

            <h5 className="mt-3 mb-3">{provide.title}</h5>
            <p className="text-secondary">{provide.paragraph}</p>
          </animated.div>
        </Link>
      </div>
    );
};

export default ServiceDetails;