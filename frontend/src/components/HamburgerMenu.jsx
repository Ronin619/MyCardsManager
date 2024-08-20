import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/navbar.css";

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

  return (
    <div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <ion-icon name="menu-sharp"></ion-icon>
      </button>
      {isOpen ? (
        <nav className="dropdown-menu">
          <ul className="list-items">
            <li>
              <a href="#getStarted" onClick={handleLogout}>
                Get Started
              </a>
              <a href="#about" onClick={handleLogout}>
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
