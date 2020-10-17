import React, { useEffect, useState } from 'react';
import './Feedback.css';

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
          <h3 className="provide client">
            Clients <span className="service">Feedback </span>
          </h3>
        </div>
        <div className="card-deck mt-5 three-card">
          {reviewData
          .slice(0, 3)
          .map((feedback) => (
            <Card feedback={feedback} key={feedback.name} />
          ))}
        </div>
      </section>
    );
};

export default Feedback;