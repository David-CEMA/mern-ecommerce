import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import ReactWhatsapp from "react-whatsapp";

function Footer() {
  return (
    <div className="footer">
      <div
        className="con"
        style={{
          color: "green",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}>
        {/* whatsapp, facebook,phone,email, */}
        {/* -------whatsapp----- */}
        <div style={{margin: "5px"}}>
          <button
            type="button"
            class="btn btn-light position-relative"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
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
          </button>
        </div>
        {/* ----call----- */}
        <div style={{margin: "5px"}}>
          <a href="tel:+233557548921" class="Blondie">
            <button
              type="button"
              class="btn btn-light position-relative"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <CallIcon
                style={{
                  height: "2rem",
                  width: "2rem",
                  color: "blue",
                }}
              />
            </button>
          </a>
        </div>
        {/* -----facebook----- */}
        <div style={{margin: "5px"}}>
          <a href="https://web.facebook.com/111861823703209/posts/praise-joint-1-ltd-general-merchant-deals-in-all-types-and-brands-of-batteries-a/303065054582884/?_rdc=1&_rdr">
            <button
              type="button"
              class="btn btn-light"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <FacebookIcon
                style={{
                  backgroundColor: "transparent",
                  height: "2rem",
                  width: "2rem",
                  color: "blue",
                }}
              />
            </button>
          </a>
        </div>
        {/* -----email---- */}
        {/* <div style={{margin: "10px"}}>
          <button type="button" class="btn btn-primary position-relative">
            <EmailIcon />
            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
              <span class="visually-hidden">New alerts</span>
            </span>
          </button>
        </div> */}
        {/* ------- */}
      </div>
    </div>
  );
}

export default Footer;
