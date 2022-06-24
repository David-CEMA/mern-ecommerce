import React, {useContext, useState, useEffect} from "react";
import {GlobalState} from "../../../GlobalState";
import axios from "axios";
import './cart.css';
import "../../Email/hgmail.css";
import { PaystackButton } from "react-paystack";
// import ReactWhatsapp from 'react-whatsapp';
import PinDropIcon from "@material-ui/icons/PinDrop";
import CancelIcon from "@material-ui/icons/Cancel";
// import emailjs from "emailjs-com";
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
  // const [message, setMessage] = useState("");
  // const [messageList, setMessageList] = useState('')
  
  // offline Handler
//   window.addEventListener('offline', function (e) {
//   e.preventDefault();
//     alert("You are offline please turn on internet connection to continue shopping. Praise Joint 1 ltd is not liable for any errors that happen due to poor internet connection. ***This message will _disappear_ when the internet connection is restored");
// });
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

  // **********************
  // console.log(cartList);
  
  const received = () => {
    // e.preventDefault(); 
    alert('Details received successfully');
    alert('Click *Pay Now* to proceed with secured payments via paystack. Mobile money (MTN, Voda, AirtelTigo) & Credit/Debit Cards');
  };
  // const handleSubmitt =  (e) => { 
  //   e.preventDefault();
  //   // clean
  //   emailjs
  //     .sendForm(
  //       "service_iz9cqfk",
  //       "template_l9y3527",
  //       // form.current,
  //       e.target,
  //       "user_iapuX0T9u5NnpKLDnR0ro"
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  //   alert("Delivery Details Recieved ✔");
  // }; 
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
            <p> Your cart is empty go to the shop to buy items.<br />*** If you have items in the cart already, reload the page , Ensure you have a stable internet connection</p></div>
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
        
          <div><h1 style={{justifySelf: "center"}}>18650 Batteries</h1>
       </div>
       <div> <img
          style={{height: "auto", width: "80%"}}
          src="./pics/j6.jpg"
          alt="praisejoint 1"
          /></div>
          <div><h1 style={{justifySelf: "center"}}>Car Batteries</h1>
       </div>
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


  

  const componentProps = {
    currency: "GHS",
    email: `${email}`,
    amount: `${total * 100}`,
    metadata: {
      name: `${name}`,
      // number: `${number}`,
    },

    publicKey: "pk_live_8c6beb8d305d66ed9a6b84cf48fe861890a1fbed",
    // publicKey: "pk_test_82428103be9d2d8235d2f800b46679aa6985ecbd",
    text: "Checkout",
    onSuccess: () => {
      // handleSubmitt();
        tranSuccess();
      setName("");
      setEmail("");
      setNumber("");
      // setMessage("");
      // alert("tranSuccess occured");
    },
    onClose: () =>  
      alert(
        "Thank you for shopping with us !"
      ),
  };

  return (
    <div> <Header/>
    <div className="bmain">
      {cart.map((product) => (
        <div className="detail-cart" key={product._id}>
          <div className="cart-pic">
            <img className="sides" src={product.images.url} alt="product" />
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
          </div>
        </div> 
      ))}
        
      <div className="sec-main">
        {/* ===-------------------------=== */}
        <div className="snd">
          <button type="button" class="btn btn-light pulse position-relative">
            <PinDropIcon />
            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-success pulse border border-light rounded-circle">
              <span class="visually-hidden">EMAIL</span>
            </span>
          </button>
          <p className="snd-p">Complete The Delivery Details Form</p>
        </div>

        <div className="row">
          <div className="formholder">
              <form action="https://formsubmit.co/802366c918dcf3f99cf0d0f20f9c9be4" method="POST"
                // onSubmit={handleSubmitt} 
                name="contactForm">
              {/* ========name========= */}
                <div className="singleItems" class="form-floating mb-3">
                  {/* table format */}
                  <input className="hidden-input" name="_template" value="table"></input>
                  {/* disable recapture */}
                  <input className="hidden-input" name="_captcha" defaultValue="false"></input>
                  {/* relink back to cart */}
                  <input className="hidden-input" name="_next" defaultValue="https://www.praisejoint1.com/cart/"></input>
                  {/* cc to admin email */}
                  <input className="hidden-input" name="_cc" defaultValue="kojodozer@gmail.com"></input>
 

                  {/* forms begining */}
                <h5 className="txt-5">Your Name</h5>
                <input
                  type="text" 
                  name="name"
                  className="name"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  class="form-control"
                  id="floatingInput1"     
                /> 
              </div>
              {/* ========phone number========= */}
              <div className="singleItems" class="form-floating mb-3">
                  <h5 className="txt-5">Phone Number </h5>
                <input
                  type="text"
                  name="number"  
                  className="name"
                  // value={number}
                  // onChange={(e) => setNumber(e.target.value)}
                  class="form-control"
                    id="floatingInput2"
                    required = {true}
                />
              </div>
              {/* ========email========= */}
              <div className="singleItems" class="form-floating mb-3">
                <h5 className="txt-5">Your Email address</h5>
                <input
                  type="email"
                  name="email"
                    className="name"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                    
                  class="form-control"
                  id="floatingInput4"
                />
              </div>

              {/* ========message========= */}
              <div>
                <h5 className="txt-5">
                  {" "}
                  Delivery Address
                </h5>
                  <p style={{color:'rebeccapurple'}}>*1. Indicate your Region</p>
                  <p>Next</p>
                <h6> (Use Ghana-Post-Service GPS <br />
                    or close landmarks) </h6>
                  <p>*Or type (I will give direction by phone call) the delivery team will contact you.</p>
                <textarea
                  name="deliveryAddress" 
                  className="txt" 
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                  class="form-control"
                    // id="floatingTextarea1"
                    rows="10" cols="50"></textarea>
                </div> 

                {/* -------------================list cart---------------- */}
                {/* <div> 
                    {cart.map((product) => (
                  <textarea name='productList'
                    key={product._id}
                    className="list-items"
                    class="form-control" 
                    defaultValue={
                        `${product.title}, quantity : ${product.quantity}, price : ${product.price * product.quantity}`
                      }
                       >
                         </textarea> 
                ))}
                </div>  */}
                {/* testwork */}
                <div className="itemList-admin"> 
                  <textarea name='productList'
                    // key={product._id}
                    className="list-items"
                    class="form-control"  
                    defaultValue={cart.map((product)  => (
                        `${product.title}, quantity : ${product.quantity}, price : ${product.price * product.quantity}`
                    ))}
                    // onChange={(e) => setMessageList(e.target.value)}
                       >
                         </textarea> 
                        </div> 
              {/* ========submit button========= */}
                 
                <div className="sendBt">
                  <button type="submit" className='cbutton' onClick={received}><span>Confirm</span>
  <div class="liquid"></div></button>
                </div>
            </form>

            {/* ========some error========= */} 
          </div>
        </div> 
      </div>
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
          
          <div
            style={{
              maxHeight: "40px",
              maxWidth: "100px",
              borderRadius: "10px",
              backgroundColor: "whitesmoke",
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
            <PaystackButton
              className="paystack-button"
              style={{margin: "5px",padding:'5px'}}
              {...componentProps}
            />
          </div>
        </div>

      </div>
      </div> 
      </div>
  );
}

export default Cart;
