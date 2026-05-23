import React, { useState } from "react";
import { bookSeat } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const seat = location.state?.seat;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [duration, setDuration] = useState(10);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  if (!seat) {
    return <h2 style={{ textAlign: "center" }}>No seat selected</h2>;
  }

  const handleBooking = async () => {
    setError("");

    if (!name.trim() || !email.trim() || !contact.trim()) {
      setError("All fields are required");
      return;
    }

    // NAME VALIDATION
    const nameRegex = /^[A-Za-z ]{3,30}$/;
    if (!nameRegex.test(name)) {
      setError("Enter a valid name (only letters, min 3 characters)");
      return;
    }

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    // CONTACT VALIDATION
    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(contact)) {
      setError("Contact number must be 10 digits");
      return;
    }

    try {
      await bookSeat(seat.id, {
        name,
        email,
        contact,
        duration
      });

      // ✅ SAVE BOOKING HISTORY (NEW ADDITION 🔥)
      const username = localStorage.getItem("username");

      const existingBookings =
        JSON.parse(localStorage.getItem("bookingHistory")) || [];

      const newBooking = {
        username,
        seatNumber: seat.seat_number,
        duration,
        time: new Date().toLocaleString()
      };

      existingBookings.push(newBooking);

      localStorage.setItem(
        "bookingHistory",
        JSON.stringify(existingBookings)
      );

      // ✅ TOAST
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        navigate("/seats", {
          state: {
            bookedSeatId: seat.id,
            duration: duration
          }
        });
      }, 2500);

    } catch (err) {
      setError(err.response?.data?.error || "Booking failed");
    }
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}> Book Study Seat</h2>

        <div style={seatBadge}>
          {seat.seat_number}
        </div>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          style={inputStyle}
        />

        <select
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          style={inputStyle}
        >
          <option value={10}>10 seconds</option>
          <option value={1800}>30 minutes</option>
          <option value={3600}>1 hour</option>
          <option value={7200}>2 hours</option>
        </select>

        <button onClick={handleBooking} style={buttonStyle}>
          Confirm Booking
        </button>

        {error && (
          <p style={{ color: "#ff4d4f", marginTop: "10px" }}>{error}</p>
        )}
      </div>

      {/* TOAST */}
      {showToast && (
        <div style={toastStyle}>
          ✅ Booking Confirmed! Your timer has started.
        </div>
      )}
    </div>
  );
}

/* STYLES (same as yours) */
const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
  position: "relative"
};

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "18px",
  padding: "40px 30px",
  width: "360px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  color: "white"
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "600",
  textAlign: "center",
  marginBottom: "10px"
};

const seatBadge = {
  background: "linear-gradient(135deg, #ff9a3c, #38b6d9)",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "13px",
  width: "fit-content",
  margin: "0 auto 10px auto"
};

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.05)",
  color: "#ffffff"
};

const buttonStyle = {
  marginTop: "10px",
  padding: "12px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg,#3b82f6,#6366f1)",
  color: "white",
  fontWeight: "600",
  cursor: "pointer"
};

const toastStyle = {
  position: "fixed",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "linear-gradient(135deg, #ff9a3c, #38b6d9)",
  color: "white",
  padding: "15px 25px",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
  fontWeight: "600",
  zIndex: 9999
};

export default Booking;