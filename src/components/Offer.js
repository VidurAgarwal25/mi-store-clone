import React from "react";
import "../styles/Offer.css";
const Offer = ({ offer }) => {
  return (
    <div className="offersection">
      {offer.map((item, index) => (
        <a href={item.url} key={item.image}>
          {" "}
          <img src={item.image} alt={`${index} offer`} />
        </a>
      ))}
    </div>
  );
};

export default Offer;
