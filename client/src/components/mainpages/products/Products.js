import React, {useContext, useState} from "react";
import {GlobalState} from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import Loading from "../utils/loading/Loading";
import axios from "axios";
// import Filters from "./Filters";
import LoadMore from "./LoadMore";
import Footer from "../../footer/Footer";
import Header1 from "../../headers/Header1";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
// import { Link } from "react-router-dom";
// import ContactIcon from "../../ContactIcon";

function Products() {
  const state = useContext(GlobalState);
  const [products, setProducts] = state.productsAPI.products;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  const [callback, setCallback] = state.productsAPI.callback;
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };

  const deleteProduct = async (id, public_id) => {
    try {
      setLoading(true);
      const destroyImg = axios.post(
        "/api/destroy",
        {public_id},
        {
          headers: {Authorization: token},
        }
      );
      const deleteProduct = axios.delete(`/api/products/${id}`, {
        headers: {Authorization: token},
      });

      await destroyImg;
      await deleteProduct;
      setCallback(!callback);
      setLoading(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const checkAll = () => {
    products.forEach((product) => {
      product.checked = !isCheck;
    });
    setProducts([...products]);
    setIsCheck(!isCheck);
  };

  const deleteAll = () => {
    products.forEach((product) => {
      if (product.checked) deleteProduct(product._id, product.images.public_id);
    });
  };

  if (loading)
    return (
       <div> <Header1/>
      <div>
        <Loading />
        </div>
        </div>
    );
  return (
     <div> <Header1/>
    <div>
      {/* <div className="filter-Holder">
      <Filters />
      </div> */}

      {isAdmin && (
        <div className="delete-all">
          <span>Select all</span>
          <input type="checkbox" checked={isCheck} onChange={checkAll} />
          <button onClick={deleteAll}>Delete ALL</button>
        </div>
      )}
      <div className="main">
        {/* ----------- */}
        <div className="products">
          {products.map((product) => {
            return (
              <ProductItem
                key={product._id}
                product={product}
                isAdmin={isAdmin}
                deleteProduct={deleteProduct}
                handleCheck={handleCheck}
              />
            );
          })}
        </div>
        </div>
          <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          }}>
     <div> <LoadMore /></div>
        </div>

      {products.length === 0 && <Loading />}
      <Footer />
      {/* ----------- */}
      
      </div>
      <div className="foorter">
            <div className="f-info">
              <div className="icon">
                   <img className="the-png" src="./pics/online-shopping.png" alt="aaa batteries, car batteries, calculator batteries , order them online"/>
                </div>
                <div className="textt">
               Place an order via WhatsApp or Call. Make an enquiry about a battery brand or specific product for your devices. We are just a call or a chat away from you. Get in touch for your battery solutions.
                </div>
                
            </div>
            <div className="f-info">
                <div className="icon">
                     <img className="the-png" src="./pics/m-p.png" alt="aaa batteries, car batteries, calculator batteries , order them online"/>
                </div>
                <div className="textt">
                 All mobile money and transactions for payments online are powered and protected by Paystack. A well secured way of conducting online mobile money and card transactions accross Africa.
                </div>
               
            </div>
            <div className="f-info">
                <div className="icon">
                   <img className="the-png" src="./pics/warranty.png" alt="aaa batteries, car batteries, calculator batteries , order them online"/>
                </div>
                <div className="textt">
                6 months warranty on rechargeable batteries selling at discounted prices. We offer amazing support to our clients who need help in procuring the ideal batteries and chargers for their gadgets and devices.
                </div>
               
            </div>
            <div className="f-info">
                <div className="icon">
                    <img className="the-png" src="./pics/location.png" alt="aaa batteries, car batteries, calculator batteries , order them online"/>
                </div>
                <div className="textt">
                Send your live location via WhatsApp to have your items delivered to your office, churches, mosques and homes. Our delivery services are customer friendly and secured.
                </div>
            </div>
      </div>
      <div className="s-media"><div className="media-icons"> <a href='https://www.instagram.com/praisejoint1batteriesgh/'><InstagramIcon className="mediaI"/></a></div>
        <div className="media-icons"> <a href='https://web.facebook.com/praisejoint1batteries/'><FacebookIcon className="mediaI"/></a></div></div>
     
      <div className="pj1-logo">
            <img className="the-name" src="./pics/9.png" alt="aaa batteries, car batteries, charger, 18640 battery charger"/>
        </div>
      </div>
  );
}

export default Products; 
