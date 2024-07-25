import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCards = () => {
  const navigate = useNavigate();

  const [set, setSet] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [marketValue, setMarketValue] = useState("");

  const handleGoToInventory = () => {
    navigate(-1);
  };

  const handleSubmitCard = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.post(
        "https://localhost:8080/createCard/newCard",
        {
          set,
          name,
          cardNumber,
          quantity,
          marketValue,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log("Card not saved", error);
    }
  };

  return (
    <div className="login-form">
      <h2>Add a new card</h2>
      <form onSubmit={handleSubmitCard}>
        <label htmlFor="set">Set</label>
        <input
          type="text"
          value={set}
          id="set"
          onChange={(e) => setSet(e.target.value)}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          value={cardNumber}
          id="cardNumber"
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          value={quantity}
          id="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label htmlFor="marketValue">Market Value</label>
        <input
          type="text"
          value={marketValue}
          id="marketValue"
          onChange={(e) => setMarketValue(e.target.value)}
        />
        <Button text="Add Card" type="Submit" />
        <Button text="go back" onClick={handleGoToInventory} />
      </form>
    </div>
  );
};

export default AddCards;
