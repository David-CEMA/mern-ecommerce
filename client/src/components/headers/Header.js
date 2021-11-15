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

  // const styleMenu = {
  //   left: menu ? 0 : "-100%",
  // };

  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
        {/* <header> */}
        {/* <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div> */}

        <div className="logo">
          <Link to="/">
            {isAdmin ? (
              "Admin"
            ) : (
              <img className="logoB" src="./pics/9.png" alt="refresh" />
            )}
          </Link>
        </div>
        <button
          style={{border: "none"}}
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          {/* <ul style={styleMenu}>
        <li onClick={() => setMenu(!menu)}> */}
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/">
                {isAdmin ? (
                  "Products"
                ) : (
                  <p className="m1" style={{color: "black", margin: "10px"}}>
                    Shop
                  </p>
                )}
              </Link>
            </li>
            {/* <li>
              <>
                <input
                  type="text"
                  value={search}
                  style={{margin: "10px"}}
                  placeholder="Type to Search!"
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
                <SearchIcon style={{marginLeft: "-35px"}} />
              </>
            </li> */}
            {isAdmin && adminRouter()}

            {isLogged ? (
              loggedRouter()
            ) : (
              // <li onClick={() => setMenu(!menu)}>
              <li class="nav-item">
                <Link to="/login">
                  <p className="m1" style={{color: "black", margin: "10px"}}>
                    Login ✥ Register
                  </p>
                </Link>
              </li>
            )}

            {/* <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li> */}
          </ul>
        </div>

        {isAdmin ? (
          ""
        ) : (
          <div className="cart-icon">
            <Link to="/cart">
              {/* <span>{cart.length}</span>
                <img src={Cart} alt="" width="30" /> */}
              <button type="button" class="btn btn-primary position-relative">
                <ShoppingCartIcon />
                <span
                  style={{
                    // fontSize: "10px",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                  {cart.length}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </div>
        )}
        {/* </header>
         */}
        {/* </div> */}
      </div>
    </nav>
  );
}

export default Header;
