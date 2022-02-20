import React, {useContext} from "react";
import {GlobalState} from "../../../GlobalState";

function LoadMore() {
  const state = useContext(GlobalState);
  const [page, setPage] = state.productsAPI.page;
  const [result] = state.productsAPI.result;

  return (
    <div className="load_more">
      {result < page * 16 ? (
        ""
      ) : (
        <button
          type="button"
          class="btn"
          onClick={() => setPage(page + 1)} style={{
            backgroundColor: "rgb(96, 192, 28)"
          }}>
          Load more
        </button>
      )} 
    </div>
  );
}

export default LoadMore;
