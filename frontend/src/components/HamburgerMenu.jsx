import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../css/hamburgerMenu.css";

const HamburgerMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://tcgvault-backend.onrender.com/logout/logoutUser",
        {},
        { withCredentials: true }
      );
      console.log(response.data);
      navigate("/home");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleGetStarted = () => {
    navigate("/getStarted");
  };

  const handleTotalValue = () => {
    navigate("/totalValue");
  };

  const handleToInventory = () => {
    navigate("/inventory");
  };

  const handleAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <ion-icon name="menu-sharp"></ion-icon>
      </button>
      {isOpen ? (
        <nav className="dropdown-menu">
          <ul className="list-items">
            <li>
              <a href="#getStarted" onClick={handleGetStarted}>
                Get Started
              </a>
              <a href="#totalValue" onClick={handleTotalValue}>
                Total Value
              </a>
              <a href="#Inventory" onClick={handleToInventory}>
                Inventory
              </a>
              <a href="#about" onClick={handleAbout}>
                About
              </a>
              <a href="#home" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

HamburgerMenu.propTypes = {
  className: PropTypes.string,
};

export default HamburgerMenu;
