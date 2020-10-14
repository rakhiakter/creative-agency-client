import React from 'react';
import customer1 from "../../images/customer-1.png";
import customer2 from "../../images/customer-2.png";
import customer3 from "../../images/customer-3.png";

import Card from '../Card/Card';


const clientData = [
  {
    img: customer1,
    name: "Nash Patrik",
    from: "CEO,Manpol",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
  },
  {
    img: customer2,
    name: "Mirriam Barron",
    from: "CEO,Manpol",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
  },
  {
    img: customer3,
    name: "Bria Malone",
    from: "CEO,Manpol",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
  }
];
const Feedback = () => {
    return (
      <section>
        <div className="text-center mt-5">
          <h3 className="provide">
            Clients <span className="service">Feedback </span>
          </h3>
        </div>
        <div className="card-deck mt-5">
          {clientData.map((feedback) => (
            <Card feedback={feedback} key={feedback.name} />
          ))}
        </div>
      </section>
    );
};

export default Feedback;