import React, {useContext, useState, useEffect} from "react";
import {GlobalState} from "../../../GlobalState";
import axios from "axios";
// import {FlutterWaveButton, closePaymentModal} from "flutterwave-react-v3";
import "../../Email/Hgmail.css";
import { PaystackButton } from "react-paystack";
import ReactWhatsapp from 'react-whatsapp';
import PinDropIcon from "@material-ui/icons/PinDrop";
import CancelIcon from "@material-ui/icons/Cancel";
import emailjs from "emailjs-com";
import Header from "../../headers/Header";

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
  // --paystack--------

  // const publicKey = process.env.PAYSTACK_PUBLIC_KEY;

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

  if (cart.length === 0)
    return (
       <div> <Header/>
      <div className="c-pist"
        style={{
          display: "flex",
          flexDirection:'column',
          justifyContent: "center",
          alignContent: 'center',
          alignItems: "center",
          justifyItems: "center",
          textAlign:'center'
          }}>
          <div>
           <p> Your cart is empty go to the shop to buy items.<br/>*** If you have items in the cart already, reload the page , Ensure you have a stable internet connection</p>
          </div>
        <div><h1>We deliver to your doorstep</h1>
        <img
          style={{height: "auto", width: "80%"}}
          src="./pics/ad.jpeg"
          alt="praisejoint 1"
        /></div>
        
          <div><h1>AAA & AAAA & C2 Batteries available</h1>
        <img
          style={{height: "auto", width: "80%"}}
          src="./pics/ad1.jpeg"
          alt="praisejoint 1"
        /> </div>
        <div><img
          style={{height: "auto", width: "80%"}}
          src="./pics/bp2.jpg"
          alt="praisejoint 1"
        /></div>
        
          <div><h1 style={{justifySelf: "center"}}>camera Batteries</h1>
        <img
          style={{height: "auto", width: "80%"}}
          src="./pics/cb.jpg"
          alt="praisejoint 1"
        /></div>
       <div> <img
          style={{height: "auto", width: "80%"}}
          src="./pics/j6.jpg"
          alt="praisejoint 1"
        /></div>
        <div><img
          style={{height: "auto", width: "80%"}}
          src="./pics/j2.jpg"
          alt="praisejoint 1"
        /></div>
        <div><img
          style={{height: "auto", width: "80%"}}
          src="./pics/j3.jpg"
          alt="praisejoint 1"
        /></div>
       <div> <img
          style={{height: "auto", width: "80%"}}
          src="./pics/j4.jpg"
          alt="praisejoint 1"
        /></div>
        <div> <img
          style={{height: "auto", width: "80%"}}
          src="./pics/j4.jpg"
          alt="praisejoint 1"
          /></div>
          
        <div><img
          style={{height: "auto", width: "80%"}}
          src="./pics/td.jpg"
          alt="praisejoint 1"
          /></div>
          
        </div>
        </div>
    );

  console.log(total);

  

  const componentProps = {
    currency: "GHS",
    email: `${email}`,
    amount: `${total * 100}`,
    metadata: {
      name: `${name}`,
      number: `${number}`,
    },

    publicKey: "pk_live_8c6beb8d305d66ed9a6b84cf48fe861890a1fbed",
    text: "Pay Now",
    onSuccess: () => {
      setEmail("");
      setName("");
      setNumber("");
      tranSuccess();
      handleSubmit();
      // alert("tranSuccess occured");
    },
    onClose: () =>
      alert(
        "Share your experience with us on facebook also share and our website to others. Thank you for shopping with us !"
      ),
  };

  return (
    <div> <Header/>
    <div className="bmain">
      {cart.map((product) => (
        <div className="detail-cart" key={product._id}>
          <div className="cart-pic">
            <img className="sides" src={product.images.url} alt="product-image" />
            </div>
          <div className="box-detail">
            <div className="delete" onClick={() => removeProduct(product._id)}>
              <CancelIcon /> 
            </div>
            <h2>{product.title}</h2>

            <h3>GHS ¢ {product.price * product.quantity}</h3>
            {/* <p>{product.description}</p>  */}
            {/* <p>{product.content}</p> */}

            <div className="amount"> 
              <button onClick={() => decrement(product._id)}> - </button>
              <span>{product.quantity}</span>
              <button onClick={() => increment(product._id)}> + </button>
            </div> 

            {/* <div className="delete" onClick={() => removeProduct(product._id)}>
              <CancelIcon /> 
            </div> */}
          </div>
        </div>
      ))}
        {/* whatsapp payment */}
        {/* <div className="w-a">
          <ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" ></ReactWhatsapp>
        </div> */}
      {/* email-form for customer-- details to shop owner */}
      <section className="sec-main">
        {/* ===-------------------------=== */}
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
                  <h5 className="txt-5">Phone Number </h5>
                   <h8>use momo number when paying via momo</h8>
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
                  Delivery Address
                </h5>
                <h8> (House No./ close Landmarks <br />
                  Ghana-Post-GPS )</h8>
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
            backgroundColor: "transparent",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            padding: "10px",
          }}>
          <div  style={{
            borderRadius: "10px",
            backgroundColor: "transparent",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            padding: "10px",
          }}>
            <div><p style={{color: "black", padding: "10px", margin: "5px"}}>
              Click 'Pay Now' to pay via mobile money or credit/debit card.
            </p></div>
            <div><img
              style={{width: "100%", height: "100%", margin: "5px"}}
              src="./pics/f2.jpg"
              alt="reload"
            /></div>
          </div>
          <div
            style={{
              maxHeight: "40px",
              maxWidth: "100px",
              borderRadius: "10px",
              backgroundColor: "whitesmoke",
              // backgroundColor: "#1d2594e3",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              justifySelf: "center",
              border: "4px solid #CCC",
              boxShadow: "2px 2px 5px 0px gray",
              cursor: "pointer",
              margin: "10px",
              fontSize: "larger",
            }}>
            {/* <FlutterWaveButton style={{margin: "5px"}} {...fwConfig} /> */}
            <PaystackButton
              className="paystack-button"
              style={{margin: "5px"}}
              {...componentProps}
            />
          </div>
        </div>

        {/* <a href="tel:+233557548921">
          <button
            style={{
              margin: "10px",
            }}
            type="button"
            class="btn btn-warning">
            CALL CUSTOMER CARE
          </button>
        </a> */}
      </div>
      </div> 
      </div>
  );
}

export default Cart;
