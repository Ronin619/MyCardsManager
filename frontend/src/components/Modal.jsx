import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ show, onClose, cardDetails, onSave }) => {
  const [name, setName] = useState("");
  const [set, setSet] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [quantity, setQuantity] = useState("");
  const [marketValue, setMarketValue] = useState("");

  useEffect(() => {
    if (cardDetails) {
      setName(cardDetails.name);
      setSet(cardDetails.set);
      setCardNumber(cardDetails.cardNumber);
      setQuantity(cardDetails.quantity);
      setMarketValue(cardDetails.marketValue);
    }
  }, [cardDetails]);

  const handleSaveClick = () => {
    const updatedCard = {
      name,
      set,
      cardNumber,
      quantity,
      marketValue,
    };
    onSave(updatedCard);
  };

  if (!show) {
    return null;
  }

  return (
    <div>
      <div>
        <h2>Edit Card</h2>
        <form>
          <div>
            <label>Set</label>
            <input
              type="text"
              name="set"
              value={set}
              onChange={(e) => setSet(e.target.value)}
            />
          </div>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Card Number</label>
            <input
              type="number"
              name="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div>
            <label>Market Value</label>
            <input
              type="text"
              name="marketValue"
              value={marketValue}
              onChange={(e) => setMarketValue(e.target.value)}
            />
          </div>
          <div>
            <button type="button" onClick={handleSaveClick}>
              Save
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  cardDetails: PropTypes.object,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  show: PropTypes.bool,
};

export default Modal;
