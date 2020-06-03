import React from "react";
import "./content.css";

const content = (props) => {
  return (
    <div className="content-main">
      <div className="content-title">
        <h2 className="content-title-header">{props.title}</h2>
      </div>
    </div>
  );
};

export default content;
