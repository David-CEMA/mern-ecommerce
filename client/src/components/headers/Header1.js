import React, {useContext, useState} from "react";
import {GlobalState} from "../../GlobalState";
import {Link} from "react-router-dom";
import axios from "axios";
import './header.css'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Filters from "../mainpages/products/Filters";


function Header1() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [search, setSearch] = state.productsAPI.search;

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <div>
        <li class="nav-item">
          <Link to="/create_product">
            {" "}
            <p style={{color: "#f8f9fa", margin: "10px"}}>Create Product</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/category">
            {" "}
            <p style={{color: "#f8f9fa", margin: "10px"}}>Categories</p>
          </Link>
        </li>
      </div>
    );
  };

  const loggedRouter = () => {
    return (
      <div>
        <li class="nav-link">
          <Link to="/history">
            <p style={{color: "#f8f9fa", margin: "10px"}}>History</p>
          </Link>
        </li>
        <li class="nav-link">
          <Link to="/" onClick={logoutUser}>
            <p style={{color: "#f8f9fa", margin: "10px"}}>Logout</p> 
          </Link>
        </li>
      </div>
    );
  };

  return (
    // <div className="bbb">
    
         /* <div class="bubbles">
      <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
  </div>   */
      
      <nav class="navbar navbar-expand-lg sticky-top navbar-light ">
      <div class="container-fluid">
        <div class="navbar-brand">
          <div className="nb">
          <div className="cc">
          
           {isAdmin ? (
       ""
        ) : (
          <div   className="cart-icon">
            <Link to="/cart">
              <button type="button" class="btn  position-relative"  style={{color:'white',backgroundColor:'transparent',padding:'5px'}}>
                <ShoppingCartIcon />
                <span
                  style={{
                    display: "flex",
                    alignContent: "center",
                      justifyContent: "center"
                  }}
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                  {cart.length}
                </span>
              </button>
            </Link> 
          </div>
            )}
            </div>
          <div className="lc">
    <a  href="/">{isAdmin ? ( 
              "Admin"
            ) : (
              <img className="logoB" src="./pics/9.png" alt="refresh" />
        )}</a> 
            </div>
            </div>
          </div>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
              <Link class="nav-link" to="/shop">
                {isAdmin ? (
                  "Products"
                ) : (
                  <p className="m1" style={{color: "#f8f9fa", margin: "10px"}}>
                    Shop
                  </p>
                )}
              </Link>
               {isAdmin && adminRouter()}

              {isLogged ? (
                loggedRouter()
              ) : (
                  <Link class="nav-link" to="/login">
                  <p className="m1" style={{color: "#f8f9fa", margin: "10px"}}>
                    Login ✥ Sign Up
                  </p>
                </Link>
              )}
      </div>
    </div>
  </div>
         <div className="filter-Holder">
      <Filters/>
      </div>
          </nav>
     /* </div>  */
    
  );
}

export default Header1;
