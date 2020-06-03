import React from "react";
import "../Card/card.css";

const card = (props) => {
  return (
    <div className="card-main">
      <div className="card-image">
        <img className="image-class" src={props.image} alt={props.altText} />
      </div>
      <div className="card-caption">
        <h5> {props.caption}</h5>
      </div>
    </div>
  );
};

export default card;
