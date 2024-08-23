import { useState } from "react";
import "../css/searchBar.css";
import PropTypes from "prop-types";

const SearchBar = ({ showFilteredCards }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          className="search-bar"
          placeholder="search"
          type="text"
          onChange={handleInputChange}
        />
        <span
          className="search-icon"
          onClick={() => showFilteredCards(searchInput)}
        >
          <ion-icon name="search"></ion-icon>
        </span>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  showFilteredCards: PropTypes.func,
};

export default SearchBar;
