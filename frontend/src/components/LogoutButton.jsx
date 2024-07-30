import axios from "axios";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

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

  return <Button text="Logout" onClick={handleLogout} />;
};

export default LogoutButton;
