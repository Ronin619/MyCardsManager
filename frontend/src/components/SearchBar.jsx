import { useState } from "react";
import "../css/searchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input className="search-bar" type="text" />
        <span className="search-icon">
          <ion-icon name="search"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
