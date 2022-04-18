import React from "react";
import "./ContactIcon.css";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
// import Tooltip from "@mui/material/Tooltip";

function ContactIcon() {
  return (
    <div className="chat-help"> 
      {/* <div className="icon-1"> */}
        {/* <Tooltip title="WhatsApp Us" arrow> */}
        <div
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
        {/* </div> */}
        {/* </Tooltip> */}
      </div>

      <a href="tel:+233557548921">
        {/* <Tooltip title="Call To Order" arrow> */}
        <div className="hoverB">
          <CallIcon
            style={{
              height: "1.6rem",
              width: "1.6rem",
              color: "green",
            }}
          />
        </div>
        {/* </Tooltip> */}
      </a>
    </div>
  );
}

export default ContactIcon;
