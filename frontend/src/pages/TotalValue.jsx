import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HamburgerMenu from "../components/HamburgerMenu";
import "../css/totalValue.css";
import axios from "axios";

const TotalValue = () => {
  const [cardsTotalValue, setCardsTotalValue] = useState(0);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:8080/findAllUsersCards/",
          {
            withCredentials: true,
          }
        );
        const cards = response.data;

        const calculatedValue = cards.reduce((acc, card) => {
          return acc + card.quantity * card.marketValue;
        }, 0);
        console.log(calculatedValue);
        setCardsTotalValue(calculatedValue.toFixed(2));
      } catch (error) {
        console.error("fetch cards unsucessful", error);
      }
    };
    fetchCardData();
  }, []);

  return (
    <div className="page-container">
      <Navbar h1="Total Value" className="totalValue-navbar">
        <HamburgerMenu className="totalValue-dropDown" />
      </Navbar>
      <div className="totalValue-container">
        <h2>Your collection is worth: ${cardsTotalValue}</h2>
      </div>
    </div>
  );
};

export default TotalValue;
