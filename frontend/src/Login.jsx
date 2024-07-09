import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <label htmlFor="email">email</label>
      <input
        type="email"
        placeholder="youremail@gmail.com"
        id="email"
        name="email"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        placeholder="********"
        id="password"
        name="password"
      />
      <button>Login In</button>
    </form>
  );
};

export default Login;
