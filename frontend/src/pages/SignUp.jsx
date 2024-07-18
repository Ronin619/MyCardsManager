import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    } catch (error) {
      console.log("Unsuccessful login");
    }
  };

  return (
    <div className="login-form">
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
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
