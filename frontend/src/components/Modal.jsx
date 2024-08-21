import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../css/modal.css";
import Backdrop from "./Backdrop";

const Modal = ({ show, onClose, cardDetails, onSave, onUpdate, heading }) => {
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
    } else {
      setName("");
      setSet("");
      setCardNumber("");
      setQuantity("");
      setMarketValue("");
    }
  }, [cardDetails]);

  const handleChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9.]/g, "");
    setMarketValue(value);
  };

  const formatValue = (value) => {
    if (!value) return "";
    return `$${value}`;
  };

  const handleSaveClick = () => {
    const cardDetails = {
      name,
      set,
      cardNumber,
      quantity,
      marketValue,
    };

    const resetForm = () => {
      setName("");
      setSet("");
      setCardNumber("");
      setQuantity("");
      setMarketValue("");
    };

    if (onUpdate) {
      onUpdate(cardDetails);
    } else {
      onSave(cardDetails);
      resetForm();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <div className="modal">
        <div>
          <h2>{heading}</h2>
          <form className="form">
            <div className="form-labels">
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
                  value={formatValue(marketValue)}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-btns-layout">
              <button
                className="form-btns form-btn-primary"
                type="button"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="form-btns form-btn-secondary"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  cardDetails: PropTypes.object,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  onUpdate: PropTypes.func,
  show: PropTypes.bool,
  heading: PropTypes.string,
};

export default Modal;
