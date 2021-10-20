import React, {useContext, useState} from "react";
import {GlobalState} from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import Loading from "../utils/loading/Loading";
import axios from "axios";
import Filters from "./Filters";
import LoadMore from "./LoadMore";
import Scarousel from "../../carousels/Scarousel";
import Footer from "../../footer/Footer";
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
      <div>
        <Loading />
      </div>
    );
  return (
    <div style={{display: "block"}}>
      <Filters />

      {isAdmin && (
        <div className="delete-all">
          <span>Select all</span>
          <input type="checkbox" checked={isCheck} onChange={checkAll} />
          <button onClick={deleteAll}>Delete ALL</button>
        </div>
      )}
      <div className="main">
        {/* <Scarousel /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}>
          <button
            class="btn btn-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample">
            Gallery
          </button>
        </div>
        <div class="collapse" id="collapseExample">
          <div class="card card-body" style={{width: "100%", height: "auto"}}>
            <Scarousel />
          </div>
        </div>
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

      <LoadMore />
      {products.length === 0 && <Loading />}
      <Footer />

      <Scarousel />
      {/* <ContactIcon /> */}
    </div>
  );
}

export default Products;
