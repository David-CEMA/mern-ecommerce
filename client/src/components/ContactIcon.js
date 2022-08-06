import React, { useContext } from "react";
import { GlobalState } from "../GlobalState"
import "./gft.css";
// import ReactWhatsapp from "react-whatsapp";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import CallIcon from "@material-ui/icons/Call";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import PermPhoneMsgRoundedIcon from "@material-ui/icons/PermPhoneMsgRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
// import InstagramIcon from "@material-ui/icons/Instagram"; 
// import FacebookIcon from "@material-ui/icons/Facebook";
import {  Link,  } from "react-router-dom";

function ContactIcon() { 
  
const state = useContext(GlobalState);
  // const [isLogged] = state.userAPI.isLogged;
  // const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;

  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className="chat-help">
      {/* <div
          className="hoverB">
          <ReactWhatsapp number="+233557548921">
            <WhatsAppIcon
              style={{
                backgroundColor: "transparent",
                height: "1.6rem",
                width: "1.6rem",
                color: "green",
              }} 
            />
          </ReactWhatsapp>
      </div>

      <a href="tel:+233557548921">
        <div className="hoverB">
          <CallIcon
            style={{
              height: "1.6rem",
              width: "1.6rem",
              color: "green",
            }}
          />
        </div>
      </a> */}
      <div className="buttom-tab>"> 
        <Link to="/">
          <div className="home">
            <HomeRoundedIcon />
          </div>
        </Link>
      </div>
      <Link to="/categories">
        <div className="categ">
          <AppsRoundedIcon />
        </div>
      </Link>
      <Link to="/cart">
        <div className="cartt">
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <ShoppingCartRoundedIcon />
          <div> ({cart.length})</div>
          </div>
        </div>
      </Link>
      <Link to="/contact">
      <div className="contt">
        <PermPhoneMsgRoundedIcon/>
      </div>
      </Link>
    </div>
  );
}

export default ContactIcon;
