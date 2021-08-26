import React from "react";
// import tranSuccess from "../cart/Cart";
// import  total from "../cart/Cart";
import {useFlutterwave, closePaymentModal} from "flutterwave-react-v3";
import {useState} from "react";

// let total = this.props.total;

export default function UsingHook() {
  // const history = useHistory();
  const total = useState(0);
  // const total = this.props.total;

  const config = {
    public_key: "FLWPUBK_TEST-95cfb4379a017a1bbd5fd98d64eb1de9-X",
    tx_ref: Date.now(),
    amount: {total},
    currency: "GHS",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "kojodozer@gmail.com",
      phonenumber: "0555148783",
      name: "user",
    },
    customizations: {
      title: "PRAISEJOINT1",
      description: "../pics/battlogo.jpeg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="payment">
      {/* <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); 
            },
            onClose: () => {},
          });
          tranSuccess = {tranSuccess};
        }}>
        Pay Now
      </button> */}
      {/* ---- */}
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal();
            },
            onClose: () => {},
          });
        }}>
        Pay Now
      </button>
      {/* <div className="payment__priceContainer">
        <CurrencyFormat
          renderText={(value) => <h3>Order Total : {value}</h3>}
          decimalScale={0}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"¢"}
        />
      </div> */}
    </div>
  );
}
