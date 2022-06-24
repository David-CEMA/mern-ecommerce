import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Link } from "react-router-dom";
import axios from "axios";
import "./header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Filters from "../mainpages/products/Filters";

function Header1() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

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
            <p style={{ color: "#f8f9fa", margin: "10px" }}>Create Product</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/category">
            {" "}
            <p style={{ color: "#f8f9fa", margin: "10px" }}>Categories</p>
          </Link>
        </li>
      </div>
    );
  };

  const loggedRouter = () => {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <li class="nav-link">
            <Link to="/history">
              <p style={{ color: "#f8f9fa", margin: "10px" }}>History</p>
            </Link>
          </li>
        </div>
        <div>
          <li class="nav-link">
            <Link to="/" onClick={logoutUser}>
              <p style={{ color: "#f8f9fa", margin: "10px" }}>Logout</p>
            </Link>
          </li>
        </div>
      </div>
    );
  };

  return (
    <nav class="navbar navbar-expand-lg  navbar-light ">
      <div class="container-fluid">
        <div class="navbar-brand">
          {isAdmin ? (
            ""
          ) : (
            <img className="logoB" src="./pics/9.png" alt="praise joint 1" />
          )}
        </div>
        {/* ------- */}
        <div class="navbar-nav">
          {isAdmin && adminRouter()}

          {isLogged ? (
            loggedRouter()
          ) : (
            <Link class="nav-link" to="/login">
              <p className="m1" style={{ color: "#f8f9fa", margin: "10px" }}>
                <AccountCircleIcon />
              </p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header1;
