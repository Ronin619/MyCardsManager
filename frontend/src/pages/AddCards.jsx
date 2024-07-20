import { useState } from "react";
import Button from "../components/Button";

const AddCards = () => {
  const [set, setSet] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [marketValue, setMarketValue] = useState("");

  const handleSubmitCard = () => {
    console.log("card added");
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
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
        <Button text="Add Card" />
      </form>
    </div>
  );
};

export default AddCards;
