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

  const handleAddCards = async (newCard) => {
    setIsModalOpen(true);
    try {
      const response = await axios.post(
        "https://localhost:8080/createCard/newCard",
        newCard,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.log("Card not saved", error);
    }
  };

  return (
    <div className="inv">
      <Navbar />
      <img src={vault} className="vault" alt="image of the word vault" />
      <div className="table-container">
        <SearchBar />
        <span className="add-card-btn" onClick={handleAddCards}>
          <ion-icon name="add-circle"></ion-icon>
        </span>
        <div className="card-table-container">
          <Table />
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
