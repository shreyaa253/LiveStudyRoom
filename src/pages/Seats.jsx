import React, { useEffect, useState } from "react";
import { getSeats } from "../services/api";
import { useNavigate, useLocation } from "react-router-dom";

function Seats() {
  const [seats, setSeats] = useState([]);
  const [timers, setTimers] = useState({});
  const [popup, setPopup] = useState("");

  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ PROTECT PAGE
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  // ✅ LOAD SEATS
  useEffect(() => {
    loadSeats();
  }, []);

  // ✅ LOAD TIMERS FROM LOCALSTORAGE (IMPORTANT)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("seatTimers")) || {};
    const now = Date.now();

    const validTimers = {};

    Object.keys(stored).forEach((seatId) => {
      const remaining = Math.floor((stored[seatId] - now) / 1000);

      if (remaining > 0) {
        validTimers[seatId] = stored[seatId];
      }
    });

    setTimers(validTimers);
  }, []);

  // ✅ WHEN USER BOOKS SEAT
  useEffect(() => {
    if (location.state?.bookedSeatId) {
      const expiry =
        Date.now() + location.state.duration * 1000;

      const updated = {
        ...(JSON.parse(localStorage.getItem("seatTimers")) || {}),
        [location.state.bookedSeatId]: expiry,
      };

      localStorage.setItem("seatTimers", JSON.stringify(updated));
      setTimers(updated);
    }
  }, [location.state]);

  // ✅ SMART TIMER (REAL TIME BASED)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();

      setTimers((prev) => {
        const updated = { ...prev };

        Object.keys(updated).forEach((seatId) => {
          const remaining = Math.floor(
            (updated[seatId] - now) / 1000
          );

          if (remaining <= 0) {
            // FREE SEAT IN UI
            setSeats((prevSeats) =>
              prevSeats.map((seat) =>
                seat.id === parseInt(seatId)
                  ? { ...seat, is_available: true }
                  : seat
              )
            );

            delete updated[seatId];
          }
        });

        localStorage.setItem("seatTimers", JSON.stringify(updated));
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ✅ LOAD SEATS FROM API
const loadSeats = async () => {
  try {
    const res = await getSeats();

    const stored = JSON.parse(localStorage.getItem("seatTimers")) || {};
    const now = Date.now();

    const updatedSeats = res.data.map((seat) => {
      const expiry = stored[seat.id];

      // 🔥 IF TIMER EXISTS
      if (expiry) {
        if (expiry > now) {
          return { ...seat, is_available: false }; // still booked
        } else {
          // ⛔ TIMER EXPIRED → REMOVE FROM STORAGE
          delete stored[seat.id];

          return { ...seat, is_available: true }; // force available
        }
      }

      // 🔥 NO TIMER → FORCE AVAILABLE (IGNORE BACKEND)
      return { ...seat, is_available: true };
    });

    // ✅ SAVE CLEANED STORAGE
    localStorage.setItem("seatTimers", JSON.stringify(stored));

    setSeats(updatedSeats);
  } catch (error) {
    console.error("Error fetching seats", error);
  }
};

  // ✅ CLICK HANDLER
  const handleSeatClick = (seat) => {
    if (!seat.is_available) return;

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      setPopup("⚠️ Please login first to book a seat");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

      return;
    }

    navigate("/booking", {
      state: { seat },
    });
  };

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");

    setPopup("👋 Logged out successfully");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  // ✅ TIME FORMATTER (REAL TIME)
  const getRemainingTime = (expiry) => {
    const seconds = Math.max(
      0,
      Math.floor((expiry - Date.now()) / 1000)
    );
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div style={{ padding: "40px", textAlign: "center", marginTop: "55px" }}>

      {/* USER + LOGOUT */}
      <div
        style={{
          position: "fixed",
          top: "15px",
          right: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 1000,
          marginTop: "98px",
        }}
      >
        <span style={{ color: "white", fontSize: "14px" }}>
          👋 {username}
        </span>

        <button
          onClick={handleLogout}
          style={{
            padding: "6px 12px",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(200deg, #ff9a3c, #38b6d9)",
            color: "white",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Logout
        </button>
      </div>

      {/* POPUP */}
      {popup && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "10px",
            fontSize: "14px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        >
          {popup}
        </div>
      )}

      <h2 style={{ marginBottom: "30px" }}>Digital Library Seats</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {seats.map((seat) => (
          <div
            key={seat.id}
            onClick={() => handleSeatClick(seat)}
            style={{
              padding: "20px",
              borderRadius: "16px",
              cursor: seat.is_available ? "pointer" : "not-allowed",
              background: seat.is_available
                ? "rgba(255,255,255,0.08)"
                : "rgba(0,0,0,0.35)",
              backdropFilter: "blur(10px)",
              color: "white",
              width: "130px",
              minHeight: "110px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.25s ease",
              border: seat.is_available
                ? "1px solid rgba(255,255,255,0.15)"
                : "1px solid rgba(255,0,0,0.2)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: "600" }}>
              {seat.seat_number}
            </div>

            <small
              style={{
                marginTop: "4px",
                color: seat.is_available ? "#7CFFB2" : "#ff6b6b",
              }}
            >
              {seat.is_available ? "Available" : "Booked"}
            </small>

            {!seat.is_available && timers[seat.id] && (
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "8px",
                  padding: "3px 8px",
                  borderRadius: "20px",
                  background: "rgba(0,0,0,0.4)",
                }}
              >
                ⏳ {getRemainingTime(timers[seat.id])}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Seats;