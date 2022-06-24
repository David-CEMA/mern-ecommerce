import React, {useContext, useState, useEffect} from "react";
import {useParams, Link,useHistory} from "react-router-dom";
import {GlobalState} from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import "./detailProduct.css";


function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);
  let history = useHistory();
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
      <div className="detail">
       <div className="d-ima"> <img className="det-img " src={detailProduct.images.url} alt="product" /></div>
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
         <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}><div> <button style={{ padding: '10px' }} onClick={() => history.goBack()}>Back</button>
          </div><div><Link
            to="/shop"><button style={{ padding: '10px' }}>Home</button></Link></div></div>
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
