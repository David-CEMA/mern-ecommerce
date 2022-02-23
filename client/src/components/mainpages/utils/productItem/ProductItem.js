import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {GlobalState} from "../../../../GlobalState";
import BtnRender from "./BtnRender";

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {
  const state = useContext(GlobalState);

  return (
    <div className="product_card">
      {isAdmin && (
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product._id)}
        />
      )}
      <Link to={`/detail/${product._id}`}>
        <img src={product.images.url} alt="" />
      </Link>

      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>GHS ¢{product.price}</span>
        <p>{product.description}</p>
      </div>

      <BtnRender product={product} deleteProduct={deleteProduct} />
      </div>
  );
}

export default ProductItem;
