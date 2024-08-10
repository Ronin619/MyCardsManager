import { useState, useEffect } from "react";
import axios from "axios";
import "../css/table.css";

const Table = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cardData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:8080/findAllUsersCards/",
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        setCards(response.data);
      } catch (error) {
        console.error("fetch cards unsucessful", error);
      }
    };
    cardData();
  }, []);

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
                <ion-icon name="pencil"></ion-icon>
                <ion-icon name="trash"></ion-icon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
