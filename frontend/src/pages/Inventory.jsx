import { useState } from "react";
import Button from "../components/Button";
import Table from "../components/Table";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import axios from "axios";
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
      <Button text="Add Cards" onClick={handleAddCards} />
      <Table />
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
