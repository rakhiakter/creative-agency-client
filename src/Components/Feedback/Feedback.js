import React, { useEffect, useState } from 'react';


import Card from '../Card/Card';



const Feedback = () => {
   const [reviewData, setReviewData] = useState([]);
   useEffect(() => {
     fetch("http://localhost:5000/getReviews")
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setReviewData(data);
       });
   }, []);
    return (
      <section>
        <div className="text-center mt-5">
          <h3 className="provide">
            Clients <span className="service">Feedback </span>
          </h3>
        </div>
        <div className="card-deck mt-5">
          {reviewData.map((feedback) => (
            <Card feedback={feedback} key={feedback.name} />
          ))}
        </div>
      </section>
    );
};

export default Feedback;