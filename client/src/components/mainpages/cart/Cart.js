import React, {useContext, useState, useEffect} from "react";
import {GlobalState} from "../../../GlobalState";
import axios from "axios";
import {Link} from "react-router-dom";
import PaypalButton from "./PaypalButton";
// import {useFlutterwave, closePaymentModal} from "flutterwave-react-v3";
import {FlutterWaveButton, closePaymentModal} from "flutterwave-react-v3";

function Cart() {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userAPI.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);
  //   const handleFlutterPayment = useFlutterwave(config);

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

  const tranSuccess = async (payment) => {
    const {paymentID, address} = payment;

    await axios.post(
      "/api/payment",
      {cart, paymentID, address},
      {
        headers: {Authorization: token},
      }
    );

    setCart([]);
    addToCart([]);
    alert("You have successfully placed an order.");
  };

  if (cart.length === 0)
    return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>;
  // ---flutter---
  const config = {
    public_key: "FLWPUBK_TEST-233ae3ddc63c755e763b9d95cb278d6a-X",
    tx_ref: Date.now(),
    amount: `${total}`,
    currency: "GHS",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "praisejoint1customer@gmail.com",
      // phonenumber: "0555148783",
      name: "user",
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
    text: "Pay with MobileMoney / Card",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
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
      <div
        style={{
          height: "7px",
          borderRadius: "10px",
          color: "blue",
          fontSize: "large",
        }}>
        {/* <button
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal(); 
                tranSuccess = {tranSuccess};
              },
              onClose: () => {},
            });
          }}>
          Pay Now
        </button> */}
        <FlutterWaveButton
          style={{
            height: "5px",
            borderRadius: "10px",
            color: "grey",
            fontSize: "large",
            margin: "15px",
          }}
          {...fwConfig}
        />
        <div>
          <img
            style={{maxHeight: "50px", maxWidth: "70px"}}
            src="./pics/battlogo.jpeg"
            alt="reload"
          />
        </div>
      </div>
      {/* <div className="total">
        <Link href to="/payout">
          <h3>Total: GHS ¢ {total}</h3>
          <button>Proceed to checkout</button>
        </Link>
      </div> */}
    </div>
  );
}

export default Cart;
