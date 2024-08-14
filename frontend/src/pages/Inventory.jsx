import { useState } from "react";
import Button from "../components/Button";
import LogoutButton from "../components/LogoutButton";
import Table from "../components/Table";
import Modal from "../components/Modal";
import axios from "axios";

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
    <>
      <h1>Welcome!</h1>
      <Button text="Add Cards" onClick={handleAddCards} />
      <LogoutButton />
      <Table />
      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddCards}
        heading="Add Card"
      />
    </>
  );
};

export default Inventory;
