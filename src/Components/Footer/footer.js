import React from "react";
import "../Footer/footer.css";
import Button from '../Button/button';

const footer = (props) => {
  return (
    <div className="footer-main">
        <div className="footer-menu"> 
        <Button id="home-button" className="button-class" buttonText="Home" />
        <span className="footer-span"> | </span>
        <Button id="terms-button" className="button-class" buttonText="Terms and Conditions"/>
        <span className="footer-span"> | </span>
        <Button id="privacy-button" className="button-class" buttonText="Privacy Policy"/>
        <span className="footer-span"> | </span>
        <Button id="collection-button" className="button-class" buttonText="Collection Statement"/>
        <span className="footer-span"> | </span>
        <Button id="help-button" className="button-class" buttonText="Help"/>
        <span className="footer-span"> | </span>
        <Button id="account-button" className="button-class" buttonText="Manage Account"/>
        </div>
        <div className="footer-copyright" > 
        <p><small> Copyright © DEMO Streaming. All rights reserved.</small> </p>
        </div>
        <div className="footer-media">
          <img className="footer-media-item" src= {require('../../Asset/images/facebookIcon.jpg')} alt="facebook icon" />
          <img className="footer-media-item" src={require('../../Asset/images/twitterIcon.png')} alt="twitter icon" />
          <img className="footer-media-item" src={require('../../Asset/images/instagramIcon.png')} alt="instagram icon" />
          <div className="footer-stores"> 
          <img className="footer-stores-item" src= {require('../../Asset/images/AppStore.png')} alt="App Store icon" />
          <img className="footer-stores-item" src={require('../../Asset/images/GooglePlayImage.png')} alt="Google Play icon" />
          <img className="footer-stores-item" src={require('../../Asset/images/MicrosoftBadge.png')} alt="Get it from Microsoft icon" />
          </div>
          {/* <a href="http://www.digg.com" > <img src="/templates/platinum/images/social/digg.png"  alt="Digg" /> </a> */}
    </div>
    </div>
  );
};

export default footer;
