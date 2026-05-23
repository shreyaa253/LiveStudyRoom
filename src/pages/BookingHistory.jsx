import React, { useEffect, useState } from "react";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const username = localStorage.getItem("username");

    const allBookings =
      JSON.parse(localStorage.getItem("bookingHistory")) || [];

    // ✅ FILTER ONLY CURRENT USER
    const userBookings = allBookings.filter(
      (b) => b.username === username
    );

    setBookings(userBookings.reverse());
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center", marginTop: "100px"}}>
      <h2>📜 My Booking History</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        <div style={{ marginTop: "20px" }}>
          {bookings.map((b, index) => (
            <div
              key={index}
              style={{
                margin: "10px auto",
                padding: "15px",
                width: "300px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.08)",
                color: "white",
                backdropFilter: "blur(10px)"
              }}
            >
              <p><b>Seat:</b> {b.seatNumber}</p>
              <p><b>Duration:</b> {b.duration}s</p>
              <p><b>Time:</b> {b.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingHistory;