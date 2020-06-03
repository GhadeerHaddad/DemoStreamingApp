import React from "react";
import  '../Header/header.css';
import Button from '../Button/button';

const header = (props) => {
  return(
  <div className="header-main">
    <div className="header-title">
      <h1> DEMO Streaming </h1>
    </div>
    <div className="header-menu">
      <div>
      <Button id="login-button" className="login-button" buttonText= "Log in" />
      </div>
      <div>
          <button id="trial-button" className="trial-button"> Start your free trial</button>
      </div>
    </div>
  </div>
  )
};

export default header;
