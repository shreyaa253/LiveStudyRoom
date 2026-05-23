import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("All fields are required");
      return;
    }

    // ✅ GET USERS FROM LOCAL STORAGE
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ CHECK USER EXISTS
    const validUser = users.find(
      (user) =>
        user.username === username && user.password === password
    );

    if (!validUser) {
      setMessage("❌ Invalid username or password");
      return;
    }

    // ✅ LOGIN SUCCESS
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);

    setMessage("✅ Login successful!");

    setTimeout(() => {
      navigate("/seats");
    }, 1000);
  };

  return (
    <div className="glass-container">
      <form onSubmit={handleSubmit} className="glass-card">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ cursor: "pointer", color: "#0a86a2" }}
          >
            Sign Up
          </span>
        </p>

        {message && (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
              background: message.includes("successful")
                ? "rgba(0,255,150,0.1)"
                : "rgba(255,0,0,0.1)",
              color: message.includes("successful")
                ? "#00ffcc"
                : "#ff4d4f",
              animation: "fadeIn 0.4s"
            }}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;