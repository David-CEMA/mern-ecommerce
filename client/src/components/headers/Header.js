import React, {useContext, useState} from "react";
import {GlobalState} from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Cart from "./icon/cart.svg";
import {Link} from "react-router-dom";
import axios from "axios";
// import Footer from "../footer/Footer";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">
            <p>History</p>
          </Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? "Admin" : "PRAISE JOINT 1 "}</Link>
        </h1>
      </div>
      {/* <div className="menulist"> */}
      <ul style={styleMenu}>
        <li onClick={() => setMenu(!menu)}>
          <Link to="/">
            {isAdmin ? (
              "Products"
            ) : (
              <p className="m1" style={{color: "black"}}>
                SHOP
              </p>
            )}
          </Link>
        </li>
        {isAdmin && adminRouter()}

        {isLogged ? (
          loggedRouter()
        ) : (
          <li onClick={() => setMenu(!menu)}>
            <Link to="/login">
              <p className="m1" style={{color: "black"}}>
                Login ✥ Register
              </p>
            </Link>
          </li>
        )}

        <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>
      {/* </div> */}

      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <Link to="/cart">
            <span>{cart.length}</span>
            <img src={Cart} alt="" width="30" />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
