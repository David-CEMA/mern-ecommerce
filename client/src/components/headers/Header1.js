import React, {useContext} from "react";
import {GlobalState} from "../../GlobalState";
import {Link} from "react-router-dom";
import axios from "axios";
import './header.css'
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
            <p style={{color: "#f8f9fa", margin: "5px"}}>Create Product</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/category">
            {" "}
            <p style={{color: "#f8f9fa", margin: "5px"}}>Categories</p>
          </Link>
        </li>
      </div>
    );
  };

  const loggedRouter = () => {
    return (
       <div className="history-logout">
          <Link to="/history">
        <div style={{padding:'1px',height:'100%',color:'whitesmoke',marginRight:'5px'}}>
            History
        </div>
          </Link>
          <Link to="/" onClick={logoutUser}>
        <div style={{padding:'1px',height:'100%',color:'whitesmoke'}}>
            Logout 
        </div>
          </Link>
      </div>  
    );
  };

  return (
    <div class="navbar navbar-expand-lg  navbar-light ">
      <div class="container-fluid" >
        <div>
              {isAdmin ? (
                ""
              ) : (

              <Filters/>
              )}
        </div>
        {/* ------- */}
            <Link  to="/login">
        <div className="m1">
          {isAdmin && adminRouter()}

          {isLogged ? (
            loggedRouter()
          ) : (
                <AccountCircleIcon />
          )}
        </div>
            </Link> 
        
      </div>
    </div>
  );
}

export default Header1;
