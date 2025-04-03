import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const register = async () => {
    try {
      const res = await axios.post("http://localhost:3000/users/register", user);
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Registration failed");
    }
  };

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:3000/users/login", { email: user.email, password: user.password });
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
    } catch (error) {
      setMessage("Login failed");
    }
  };

  return (
    <div>
      <h2>User Authentication</h2>
      <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default App;
