import React, {useContext, useState} from "react";
import {GlobalState} from "../../GlobalState";
// import Menu from "./icon/menu.svg";
// import Close from "./icon/close.svg";
// import Cart from "./icon/cart.svg";
import {Link} from "react-router-dom";
import axios from "axios";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
// import Footer from "../footer/Footer";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  // const [menu, setMenu] = useState(false);
  const [search, setSearch] = state.productsAPI.search;

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">
            {" "}
            <p style={{color: "black", margin: "10px"}}>Create Product</p>
          </Link>
        </li>
        <li>
          <Link to="/category">
            {" "}
            <p style={{color: "black", margin: "10px"}}>Categories</p>
          </Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">
            <p style={{color: "black", margin: "10px"}}>History</p>
          </Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            <p style={{color: "black", margin: "10px"}}>Logout</p> 
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light "
      style={{ backgroundColor: 'rgb(96, 192, 28)' }}
    >
      <div class="container-fluid">
        
         <button
          style={{borderStyle: "none",boxShadow:'none'}}
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="logo">
          <Link to="/">
            {isAdmin ? ( 
              "Admin"
            ) : (
              <img className="logoB" src="./pics/9.png" alt="refresh" />
            )}
          </Link>
        </div>
       

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/shop">
                {isAdmin ? (
                  "Products"
                ) : (
                  <p className="m1" style={{color: "black", margin: "10px"}}>
                    Shop
                  </p>
                )}
              </Link>
            </li>
            {isAdmin && adminRouter()}

            {isLogged ? (
              loggedRouter()
            ) : (
              // <li onClick={() => setMenu(!menu)}>
              <li class="nav-item">
                <Link to="/login">
                  <p className="m1" style={{color: "black", margin: "10px"}}>
                    Login ✥ Sign Up
                  </p>
                </Link>
              </li>
            )}
          </ul>
        </div>

        {isAdmin ? (
       ""
        ) : (
          <div className="cart-icon">
            <Link to="/cart">
              <button type="button" class="btn  position-relative"  style={{color:'white',backgroundColor:'rgba(96, 192, 28, 0.9)',padding:'5px'}}>
                <ShoppingCartIcon />
                <span
                  style={{
                    display: "flex",
                    alignContent: "center",
                      justifyContent: "center"
                  }}
                  class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-light text-dark">
                  {cart.length}
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>  
    </nav>
  );
}

export default Header;
