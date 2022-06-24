import React, { useState, useContext } from "react";
import { GlobalState } from "../../../../GlobalState";
import './categoryL.css';

function CategoryL() {  
    
    const state = useContext(GlobalState);
    const [categories] = state.categoriesAPI.categories;

    const [category, setCategory] = state.productsAPI.category;
    const [sort, setSort] = state.productsAPI.sort;
    const [search, setSearch] = state.productsAPI.search;

    const handleCategory = (e) => {
        window.location.href = "/";
      window.scrollTo(0, 0);
      setCategory(e.target.value);
      setSearch("");
    };
    const handleTheSearch = (e) => {
      window.scrollTo(0, 0);
      setCategory("");
      setSearch(e.target.value.toLowerCase());
    };

    const handleClear = (e) => {
      setCategory("");
      setSearch("");
    };
    return (
        <div className="clll">
          <h3>CATEGORIES</h3>
            
            <div className="blockk">
              {categories.map((category) => (
                <div
                  className="cboxx"
                  key={category._id}
                  name="category"
                  value={category}
                  onClick={handleCategory}
                >
                  <div>{category.name}</div>
                </div>
              ))}
            </div>
        </div>
    );
}

export default CategoryL;
