import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import CallIcon from "@material-ui/icons/Call";
import InfoIcon from "@material-ui/icons/Info";
// import EmailIcon from "@material-ui/icons/Email";
// import ReactWhatsapp from "react-whatsapp";

function Footer() {
  return (
    <div className="footer">
      <h1>THE BEST AFRICAN ONLINE BATTERIES & CHARGERS SHOP</h1>
      <h3>A Wide Range Of Secured Payment By PAYSTACK.</h3>
      <img
        style={{width: "100%", height: "auto", margin: "5px"}}
        src="./pics/ps.png"
        alt="refresh"
      />
      <h3>Your Online Battery Shop</h3>
      <img
        style={{width: "100%", height: "auto", margin: "5px"}}
        src="./pics/dd.jpg"
        alt="refresh"
      />
    </div>
  );
}

export default Footer;
