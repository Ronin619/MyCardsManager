import { useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import "../css/signUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:8080/signUp/user", {
        email,
        password,
      });
      console.log("Sign up successful:", response.data);
    } catch (error) {
      console.log("Unsuccessful sign up");
    }
  };

  return (
    <div className="signUp-container">
      <h1 className="signUp-h1">Welcome new collector!</h1>
      <div className="signUp-form">
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account</p>
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
          <Button text="Sign up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
