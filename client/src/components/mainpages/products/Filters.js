import React, {useContext} from "react";
import {GlobalState} from "../../../GlobalState";
import SearchIcon from "@material-ui/icons/Search";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <div className="filter_menu">
      <div className="row">
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">All Products</option>
          {categories.map((category) => (
            <option value={"category=" + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="searchbar">
        <input
          type="text"
          value={search}
          placeholder="Type to Search"
          onChange={(e) => setSearch(e.target.value.toLowerCase() )}
        />
        {/* window.location.href = "/"; */}
        <SearchIcon style={{marginLeft: "-35px"}} />
      </div>

      <div className="row-sort">
        <span style={{color: "white"}}>Sort By: </span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">New Products</option>
          <option value="sort=oldest">Old Products</option>
          <option value="sort=-sold">Best sales</option>
          <option value="sort=-price">Price: Highest-Lowest</option>
          <option value="sort=price">Price: Lowest-Highest</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
