import { useState } from "react";
import axios from "axios";
import "../css/table.css";
import PropTypes from "prop-types";
import Modal from "./Modal";

const Table = ({ cards, setCards }) => {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (cardId) => {
    setSelectedCardId(cardId);
    setIsModalOpen(true);
  };

  const handleUpdate = async (updatedCard) => {
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
                <span
                  className="action-icons"
                  onClick={() => handleEdit(card._id)}
                >
                  <ion-icon name="pencil"></ion-icon>
                </span>
                <span
                  className="action-icons"
                  onClick={() => handleDelete(card._id)}
                >
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
        onUpdate={handleUpdate}
        heading="Edit Card"
      />
    </div>
  );
};

Table.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      set: PropTypes.string,
      name: PropTypes.string,
      cardNumber: PropTypes.number,
      quantity: PropTypes.number,
      marketValue: PropTypes.string,
    })
  ),
  setCards: PropTypes.func,
};

export default Table;
