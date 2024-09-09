import { useState } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import axios from "axios";
import vault from "../images/vault.png";
import SearchBar from "../components/SearchBar";
import "../css/inventory.css";

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isAllCardsVisible, setIsAllCardsVisible] = useState(false);

  const handleShowAllCards = async () => {
    if (isAllCardsVisible) {
      setCards([]);
      setIsAllCardsVisible(false);
    } else {
      try {
        const response = await axios.get(
          "https://tcgvault-backend.onrender.com/findAllUsersCards/",
          {
            withCredentials: true,
          }
        );
        setCards(response.data);
        setIsAllCardsVisible(true);
      } catch (error) {
        console.error("fetch cards unsucessful", error);
      }
    }
  };

  const handleAddCards = async (newCard) => {
    setIsModalOpen(true);
    try {
      const response = await axios.post(
        "https://tcgvault-backend.onrender.com/createCard/newCard",
        newCard,
        { withCredentials: true }
      );
      const addedCard = response.data;
      setCards((prevCards) => [...prevCards, addedCard]);
    } catch (error) {
      console.log("Card not saved", error);
    }
  };

  const showFilteredCards = async (searchInput) => {
    try {
      const response = await axios.get(
        `https://tcgvault-backend.onrender.com/filteredCards/filter?search=${searchInput}`,
        {
          params: { search: searchInput },
          withCredentials: true,
        }
      );
      setCards(response.data);
      setSearchInput("");
    } catch (error) {
      console.error("fetch filtered cards unsucessful", error);
    }
  };

  return (
    <div className="inv">
      <Navbar h1="Inventory" className="inventory-navbar" />
      <img src={vault} className="vault" alt="image of the word vault" />
      <div className="table-container">
        <div className="searchBar-tableBtn-wrapper">
          <SearchBar
            showFilteredCards={showFilteredCards}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <div className="table-btns">
            <span className="load-all-cards-btn" onClick={handleShowAllCards}>
              <ion-icon name="file-tray-full"></ion-icon>
            </span>
            <span className="add-card-btn" onClick={handleAddCards}>
              <ion-icon name="add-circle"></ion-icon>
            </span>
          </div>
        </div>
        <div className="card-table-container">
          <Table cards={cards} setCards={setCards} />
        </div>
      </div>
      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddCards}
        heading="Add Card"
      />
    </div>
  );
};

export default Inventory;
