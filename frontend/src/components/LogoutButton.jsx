import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://localhost:8080/logout/logoutUser",
        {},
        { withCredentials: true }
      );
      navigate("/home");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return <Button text="Logout" onClick={handleLogout} />;
};

export default LogoutButton;
