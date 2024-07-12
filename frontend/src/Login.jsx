import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <h2>Login</h2>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login In</button>
      </form>
      <p>
        Don&apos;t have an account? <a href="/signup">sign up</a>
      </p>
    </>
  );
};

export default Login;
