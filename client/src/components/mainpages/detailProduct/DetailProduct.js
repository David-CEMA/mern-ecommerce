import React, {useContext, useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {GlobalState} from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import "./detailProduct.css";
// --------
import axios from "axios";
// import '../../headers/header.css'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);
  // --------
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  // const [search, setSearch] = state.productsAPI.search;

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

  // ---------------
  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

  return (
    <div>
        <nav class="navbar navbar-expand-lg  navbar-light ">
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
                    /* <img className="logoB" src="./pics/9.png" alt="refresh" /> */ 
                    <h2 style={{color:'white'}}>PRAISE JOINT 1</h2>
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
</nav>
      <div className="detail">
       <div className="d-ima"> <img src={detailProduct.images.url} alt="product image" /></div>
        <div className="box-detail">
          <div className="row-t"> 
            <h2>{detailProduct.title}</h2>
            <h6>#id: {detailProduct.product_id}</h6>
          </div>
          <span>GHS ¢ {detailProduct.price}</span>
          <p>{detailProduct.description}</p>
          <p>{detailProduct.content}</p>
          {/* <p>Sold: {detailProduct.sold}</p> */}
          <Link
            to="/cart"
            className="cart"
            onClick={() => addCart(detailProduct)}>
           Add To Cart
          </Link>
        </div>
      </div>

      <div>
        <h2>Related products</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
