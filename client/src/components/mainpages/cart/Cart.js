import React, {useContext, useState, useEffect} from "react";
import {GlobalState} from "../../../GlobalState";
import axios from "axios";
import {FlutterWaveButton, closePaymentModal} from "flutterwave-react-v3";
import "../../Email/Hgmail.css";
import PinDropIcon from "@material-ui/icons/PinDrop";
import emailjs from "emailjs-com";

function Cart() {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userAPI.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);
  // -----delivery form
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [message1, setMessage1] = useState("");

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [cart]);

  const addToCart = async (cart) => {
    await axios.patch(
      "/user/addcart",
      {cart},
      {
        headers: {Authorization: token},
      }
    );
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
      addToCart(cart);
    }
  };
  // handle submit-------------------------

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
    alert("Delivery Details Sent successful ✔");
    // setName("");
    // setNumber("");
    // setEmail("");
    // setMessage1("");
    // setMessage("");
    // ====
  };

  const tranSuccess = async () => {
    await axios.post(
      "/api/payment",
      {cart},
      {
        headers: {Authorization: token},
      }
    );

    setCart([]);
    addToCart([]);
    alert("You have successfully placed an order.");
  };
  //   setName("");
  //   setNumber("");
  //   setEmail("");
  //   setMessage1("");
  //   setMessage("");
  // };

  if (cart.length === 0)
    return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>;
  // ---flutter---
  const config = {
    public_key: "FLWPUBK-a10e4978d2db851ef1c7acaa462952cd-X",
    // public_key: "FLWPUBK_TEST-95cfb4379a017a1bbd5fd98d64eb1de9-X",
    tx_ref: Date.now(),
    amount: `${total}`,
    currency: "GHS",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${email}`,
      phonenumber: `${number}`,
      name: `${name}`,
    },
    customizations: {
      title: "PRAISEJOINT1",
      description: "Secure Payments",
      logo: "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-9/160537798_293659202190136_7712127883670045037_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEXbk78K0EKkY0RUoX-mSWg7Rf_fvFFrMftF_9-8UWsxxwAOfWJLBmUnUJUPU8gLmcb-lFMHSDILoBjZS3yqd4D&_nc_ohc=rFmIrDzj8P0AX-yD0lb&_nc_ht=scontent.facc5-1.fna&oh=973c6159840cec8dd249abe8a54a1bdc&oe=61461EA8",
    },
  };
  //   const handleFlutterPayment = useFlutterwave(config);
  const fwConfig = {
    ...config,
    text: "Checkout",
    callback: (response) => {
      console.log(response);
      closePaymentModal();
      // handleSubmit();
      tranSuccess();
    },
    onClose: () => {},
  };

  return (
    <div>
      {cart.map((product) => (
        <div className="detail cart" key={product._id}>
          <img src={product.images.url} alt="" />

          <div className="box-detail">
            <h2>{product.title}</h2>

            <h3>GHS ¢ {product.price * product.quantity}</h3>
            <p>{product.description}</p>
            <p>{product.content}</p>

            <div className="amount">
              <button onClick={() => decrement(product._id)}> - </button>
              <span>{product.quantity}</span>
              <button onClick={() => increment(product._id)}> + </button>
            </div>

            <div className="delete" onClick={() => removeProduct(product._id)}>
              X
            </div>
          </div>
        </div>
      ))}
      {/* email-form for customer-- details to shop owner */}
      <section className="sec-main">
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
                  name="number"
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
                  name="email"
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
                  Delivery Address (House No. Or Landmarks <br /> Ghana-Post-GPS
                  e.g : GA-183-8164)
                </h5>
                <textarea
                  name="message"
                  className="txt"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  class="form-control"
                  id="floatingTextarea1"></textarea>
              </div>
              {/* ========Dcart========= */}
              <div
                className="singleItems"
                class="form-floating"
                style={{display: "none"}}>
                {cart.map((product) => (
                  <p
                    type="text"
                    name="cart"
                    // className="cartDelivery"
                    value={cart}
                    // onBeforeInput={(e) => setMessage1(e.target.value)}
                    class="form-control"
                    id="floatingTextarea2"
                    key={product._id}>
                    <p>
                      <h5> {product.title}</h5>
                      <br />
                      <h5>GHS ¢ {product.price * product.quantity}</h5>
                    </p>
                  </p>
                ))}
              </div>
              {/* ========submit button========= */}
              <div className="btn">
                <button type="submit" class="btn btn-light">
                  Done
                </button>
              </div>
            </form>

            {/* ========some error========= */}
          </div>
        </div>
      </section>
      {/* -------------- */}
      <div
        style={{
          borderRadius: "10px",
          display: "block",
          justifyContent: "center",
          alignContent: "center",
          fontSize: "large",
        }}>
        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "#070928",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            padding: "10px",
          }}>
          <div>
            <p style={{color: "whitesmoke", padding: "10px", margin: "5px"}}>
              Click to pay via mobile money or credit/debit card
              <br />
              MTN MOMO_VODA CASH_TIGO CASH <br />
              SECURED BY FlutterWave
            </p>
            <img
              style={{width: "auto", height: "60px", margin: "5px"}}
              src="./pics/f1.png"
              alt="reload"
            />
            <img
              style={{width: "auto", height: "60px", margin: "5px"}}
              src="./pics/f2.jpg"
              alt="reload"
            />
            <img
              style={{width: "auto", height: "60px", margin: "5px"}}
              src="./pics/f3.png"
              alt="reload"
            />
          </div>
          <div
            style={{
              maxHeight: "40px",
              maxWidth: "100px",
              borderRadius: "10px",
              backgroundColor: "#1d2594e3",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              justifySelf: "center",
              border: "1px solid #CCC",
              boxShadow: "0 0 5px -1px gray",
              cursor: "pointer",
              margin: "10px",
              fontSize: "larger",
            }}>
            <FlutterWaveButton style={{margin: "5px"}} {...fwConfig} />
          </div>
        </div>

        <a href="tel:+233557548921">
          <button
            style={{
              margin: "10px",
            }}
            type="button"
            class="btn btn-primary">
            CALL CUSTOMER CARE
          </button>
        </a>
      </div>
    </div>
  );
}

export default Cart;
