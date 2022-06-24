import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
// import {getUser} from "../../../../../../../controllers/userCtrl";
import {GlobalState} from "../../../GlobalState";
import Header from "../../headers/Header";

function OrderDetails() {
  const state = useContext(GlobalState);
  const [history] = state.userAPI.history;
  // const Users = state.userAPI.token;
  const [orderDetails, setOrderDetails] = useState([]);
  // const Users = getUser;

  const params = useParams();
  // getting the user details for the history

  useEffect(() => {
    if (params.id) {
      history.forEach((item) => {
        if (item._id === params.id) setOrderDetails(item);
      });
    }
  }, [params.id, history]);

  if (orderDetails.length === 0) return null;

  return (
    <div> <Header/>
    <div className="history-page">
      <table>
        <thead>
          <tr>
            {/* <th>Name</th> */}
            {/* <th>Address</th>
            <th>Postal Code</th>
            <th>Country Code</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>user info</td> */}
            {/* <td>
              {orderDetails.address.line1 + " - " + orderDetails.address.city}
            </td>
            <td>{orderDetails.address.postal_code}</td>
            <td>{orderDetails.address.country_code}</td> */}
          </tr>
        </tbody>
      </table>

      <table style={{margin: "30px 0px"}}>
        <thead>
          <tr>
            <th></th>
            <th>Products</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.cart.map((item) => (
            <tr key={item._id}>
              <td>
                <img src={item.images.url} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>GHS {item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
  );
}

export default OrderDetails;
