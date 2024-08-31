import "../css/searchBar.css";
import PropTypes from "prop-types";

const SearchBar = ({ showFilteredCards, searchInput, setSearchInput }) => {
  return (
    <div className="search-container">
      <input
        className="search-bar"
        placeholder="search"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <span
        className="search-icon"
        onClick={() => showFilteredCards(searchInput)}
      >
        <ion-icon name="search"></ion-icon>
      </span>
    </div>
  );
};

SearchBar.propTypes = {
  showFilteredCards: PropTypes.func,
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.string,
};

export default SearchBar;
