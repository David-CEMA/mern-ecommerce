import React, {useContext} from "react";
import {GlobalState} from "../../../GlobalState";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
// import ClearIcon from '@material-ui/icons/Clear';

function Filters() {
  const state = useContext(GlobalState);
  // const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  // const handleCategory = (e) => {
  //    window.scrollTo(0, 0);
  //   setCategory(e.target.value);
  //   setSearch(""); 
  // };
  const handleTheSearch = (e) => {
     window.scrollTo(0, 0);
    setCategory('');
    setSearch(e.target.value.toLowerCase() )
  };


  const handleClear = (e) => {
    setCategory('');
    setSearch("");   
  };
   
  return (
    <div className="filter_menu">
      {/* <div className="row">
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">All Products</option>
          {categories.map((category) => (
            <option value={"category=" + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div> */}

      <div className="searchbar">
        <input
          type="text"
          value={search} 
          placeholder="Search"
          onChange={handleTheSearch} 
          // onChange={(e) => setSearch(e.target.value.toLowerCase() )}
        />
        {/* window.location.href = "/"; */}
        <SearchRoundedIcon style={{ marginLeft: "-35px" }} />
      </div>
      <div
        className="clearr"
        onClick={handleClear}
        style={{ fontSize: "small", backgroundColor: "white",padding:'2px',borderRadius:'5px' }}
      >
        {" "}
        Clear Fliters
      </div>

      <div className="row-sort">
        <span style={{ color: "white" }}>Sort By: </span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">New LISTING</option>
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
