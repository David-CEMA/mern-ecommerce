import React, {useState} from "react";
import "./Hgmail.css";
import PinDropIcon from "@material-ui/icons/PinDrop";
import emailjs from "emailjs-com";

const Hgmail = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iz9cqfk",
        "template_l9y3527",
        e.target,
        "user_iapuX0T9u5NnpKLDnR0ro"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    alert("Email Sent successful ✔");
    setName("");
    setNumber("");
    setEmail("");
    // setGps('');
    setMessage("");
  };

  return (
    <div className="sec-main">
      {/* ====== */}
      <div className="snd">
        <button type="button" class="btn btn-light pulse position-relative">
          <PinDropIcon />
          <span class="position-absolute top-0 start-100 translate-middle p-2 bg-success pulse border border-light rounded-circle">
            <span class="visually-hidden">EMAIL</span>
          </span>
        </button>
        <p className="snd-p">Complete The Delivery Address Form</p>
      </div>

      <div className="row">
        <div className="formholder">
          <form onSubmit={handleSubmit} name="contactForm">
            {/* ========name========= */}
            <div className="singleItems" class="form-floating mb-3">
              <h5 className="txt-5">Your Name</h5>
              <input
                type="text"
                name="name"
                className="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                class="form-control"
                id="floatingInput1"
              />
            </div>
            {/* ========phone number========= */}
            <div className="singleItems" class="form-floating mb-3">
              <h5 className="txt-5">Phone Number</h5>
              <input
                type="text"
                name="name"
                className="name"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                class="form-control"
                id="floatingInput2"
              />
            </div>
            {/* ========email========= */}
            <div className="singleItems" class="form-floating mb-3">
              <h5 className="txt-5">Your Email address</h5>
              <input
                type="email"
                name="Email"
                className="name"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="form-control"
                id="floatingInput4"
              />
            </div>

            {/* ========message========= */}
            <div className="singleItems" class="form-floating">
              <h5 className="txt-5">
                {" "}
                Delivery Address (House No. Landmarks <br /> Ghana-Post-GPS e.g
                : GA-183-8164)
              </h5>
              <textarea
                name="message"
                className="txt"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                class="form-control"
                id="floatingTextarea1"></textarea>
            </div>
            {/* ========submit button========= */}
            <div className="btn">
              <button type="submit" class="btn btn-light">
                submit
              </button>
            </div>
          </form>
          {/* ========some error========= */}
        </div>
      </div>
    </div>
  );
};

export default Hgmail;
