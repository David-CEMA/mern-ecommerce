import React, {useContext} from "react";
import {GlobalState} from "../../../GlobalState";

function LoadMore() {
  const state = useContext(GlobalState);
  const [page, setPage] = state.productsAPI.page;
  const [result] = state.productsAPI.result;

  return (
    <div className="load_more">
      {result < page * 9 ? (
        ""
      ) : (
        // <button
        //   style={{
        //     color: "#070928",
        //     fontSize: "large",
        //     borderRadius: "15px",
        //     padding: "10px",
        //   }}
        //   onClick={() => setPage(page + 1)}>
        //   Load more
        // </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setPage(page + 1)}>
          Load more
        </button>
      )}
    </div>
  );
}

export default LoadMore;
