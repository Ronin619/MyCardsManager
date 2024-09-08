import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../css/home.css";
import appLogo from "../images/appLogo.png";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://tcgvault-backend.onrender.com/login/loginUser:8080",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log("Login successful:", response.data);
      navigate("/inventory");
    } catch (error) {
      console.log("Unsuccessful login", error);
    }
  };

  return (
    <div className="home-page-container">
      <img src={appLogo} className="logo-image" alt="image of the app logo" />
      <div className="horizontal-line"></div>
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                value={email}
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <ion-icon name="key-outline"></ion-icon>
              <input
                type="password"
                placeholder="********"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button text="Login" type="submit" />
          </form>
          <p>
            Don&apos;t have an account? <Link to="/signup">sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
