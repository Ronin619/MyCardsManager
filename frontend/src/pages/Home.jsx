import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:8080/login/loginUser",
        {
          email,
          password,
        }
      );
      console.log("Login successful:", response.data);
      navigate("/inventory");
    } catch (error) {
      console.log("Unsuccessful login");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Login" />
        {/*<button>Login In</button>*/}
      </form>
      <p>
        Don&apos;t have an account? <Link to="/signup">sign up</Link>
      </p>
    </div>
  );
};

export default Home;
