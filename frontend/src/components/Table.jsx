import { useState, useEffect } from "react";
import axios from "axios";
import "../css/table.css";
import Modal from "./Modal";

const Table = () => {
  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const cardData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:8080/findAllUsersCards/",
          {
            withCredentials: true,
          }
        );
        setCards(response.data);
      } catch (error) {
        console.error("fetch cards unsucessful", error);
      }
    };
    cardData();
  }, []);

  const handleEdit = (cardId) => {
    setSelectedCardId(cardId);
    setIsModalOpen(true);
  };

  const handleSave = async (updatedCard) => {
    try {
      await axios.put(
        `https://localhost:8080/editCard/${selectedCardId}`,
        updatedCard,
        { withCredentials: true }
      );
      setCards((prevCards) => {
        return prevCards.map((card) =>
          card._id === selectedCardId ? { ...card, ...updatedCard } : card
        );
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Card update unsuccessful", error);
    }
  };

  const handleDelete = async (cardId) => {
    try {
      await axios.delete(`https://localhost:8080/deleteCard/${cardId}`, {
        withCredentials: true,
      });
      setCards((prevCards) => {
        return prevCards.filter((card) => card._id !== cardId);
      });
    } catch (error) {
      console.error("Card deletion unsuccessful", error);
    }
  };

  return (
    <div className="card-table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Set</th>
            <th>Name</th>
            <th>Card Number</th>
            <th>Quantity</th>
            <th>Market Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card._id}>
              <td>{card.set}</td>
              <td>{card.name}</td>
              <td>{card.cardNumber}</td>
              <td>{card.quantity}</td>
              <td>{card.marketValue}</td>
              <td className="actions">
                <span onClick={() => handleEdit(card._id)}>
                  <ion-icon name="pencil"></ion-icon>
                </span>
                <span onClick={() => handleDelete(card._id)}>
                  <ion-icon name="trash"></ion-icon>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cardDetails={cards.find((card) => card._id === selectedCardId)}
        onSave={handleSave}
      />
    </div>
  );
};

export default Table;
