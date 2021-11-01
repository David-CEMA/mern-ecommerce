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
        {/* <div style={{margin: "5px"}}>
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
        </div> */}
        {/* ----call----- */}
        {/* <div style={{margin: "5px"}}>
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
        </div> */}
        {/* -----facebook----- */}
        <div style={{margin: "5px"}}>
          <a href="https://web.facebook.com/pj1batteries">
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
        {/* modal for the about us */}
        <p>
          <button
            class="btn btn-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <InfoIcon
              style={{
                backgroundColor: "transparent",
                height: "2rem",
                width: "2rem",
                color: "blue",
              }}
            />
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <h5>ABOUT PRAISE JOINT 1 LTD</h5>
            PRAISE JOINT 1 is Incorporated under the Companies Act 2019, Act 992
            as a Limited Company, on the 12th day of January 2021.
            <br />
            Reg No. CS012280121
            <br />
            TIN : C005857770X
            <img
              style={{width: "100%", height: "auto"}}
              src="./pics/pjlogo1.jpeg"
              alt="reload"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
