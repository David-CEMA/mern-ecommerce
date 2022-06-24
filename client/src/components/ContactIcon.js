import React, { useContext } from "react";
import { GlobalState } from "../GlobalState"
import "./gft.css";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PermPhoneMsgRoundedIcon from "@material-ui/icons/PermPhoneMsgRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useParams, Link, useHistory } from "react-router-dom";

function ContactIcon() {
  
const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <Link to="/">
        <div className="contt">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <PermPhoneMsgRoundedIcon
              style={{
                marginTop:'-5px',
                height: "1.5rem",
                width: "1.5rem",
                color: "rgb(21, 95, 102)",
              }}
            />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={<a href="tel:+233557548921" />}>
              <CallIcon
                style={{
                  height: "2rem",
                  width: "2rem",
                  color: "green",
                }}
              />
            </MenuItem>
            <MenuItem>
              {" "}
              <ReactWhatsapp number="+233557548921">
                <WhatsAppIcon
                  style={{
                    backgroundColor: "transparent",
                    height: "2rem",
                    width: "2rem",
                    color: "green",
                  }}
                />
              </ReactWhatsapp>
            </MenuItem>
            {/* <MenuItem
              onClick={
                <a href="https://www.instagram.com/praisejoint1batteriesgh/"/>}>
              <InstagramIcon
                style={{
                  height: "2rem",
                  width: "2rem",
                  color: "rgb(202, 21, 212)",
                }}
              />
            </MenuItem>
            <MenuItem
              onClick={<a href="https://web.facebook.com/praisejoint1batteries/"/>}>
              <FacebookIcon
                style={{
                  height: "2rem",
                  width: "2rem",
                  color: "rgb(21, 95, 102)",
                }}
              />
            </MenuItem> */}
          </Menu>
        </div>
      </Link>
    </div>
  );
}

export default ContactIcon;
