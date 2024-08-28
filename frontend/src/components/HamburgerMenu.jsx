import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/hamburgerMenu.css";

const Hamburgermenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://localhost:8080/logout/logoutUser",
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
    console.log("handleGetStarted");
  };

  const handleInventoryValue = () => {
    console.log("handleInventoryValue");
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
              <a href="#inventoryValue" onClick={handleInventoryValue}>
                Inventory Value
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

export default Hamburgermenu;
