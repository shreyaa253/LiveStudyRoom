import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = form.username.trim();
    const password = form.password.trim();

    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    // ✅ GET EXISTING USERS
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ CHECK DUPLICATE USER
    const userExists = users.find(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );

    if (userExists) {
      setError("⚠️ Username already exists");
      return;
    }

    // ✅ CREATE NEW USER
    const newUser = {
      username,
      password
    };

    users.push(newUser);

    // ✅ SAVE TO LOCALSTORAGE
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ SUCCESS
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="glass-container">
      <form onSubmit={handleSubmit} className="glass-card">
        <h2>Create Account</h2>

        <input
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>

        {error && (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
              background: "rgba(255,0,0,0.1)",
              color: "#ff4d4f",
              animation: "fadeIn 0.4s"
            }}
          >
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

export default Signup;