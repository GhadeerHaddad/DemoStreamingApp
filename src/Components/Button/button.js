import React from "react";
import "../Button/button.css";

const button = (props) => {
  return (
      <div className="button-main">
      <button id={props.id} className={props.className}>
        {props.buttonText}
      </button>
      </div>
  );
};

export default button;
