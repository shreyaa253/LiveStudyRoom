import React, { useEffect, useState } from "react";
import { getMyBookings } from "../services/api";

function MyBookings() {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchBookings = async () => {
      try {
        const data = await getMyBookings();
        setBookings(data);
      } catch (err) {
        console.log("Error fetching bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();

  }, []);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        Loading bookings...
      </h2>
    );
  }

  return (
    <div style={pageStyle}>

      <h1 style={titleStyle}>My Bookings</h1>

      {bookings.length === 0 ? (
        <p style={{ color: "white" }}>No bookings found</p>
      ) : (
        <div style={gridStyle}>
          {bookings.map((booking) => (
            <div key={booking.id} style={cardStyle}>

              <h2 style={seatStyle}>Seat {booking.seat_number}</h2>

              <p>
                <strong>User:</strong> {booking.username}
              </p>

              <p>
                <strong>Booked At:</strong>{" "}
                {new Date(booking.booking_time).toLocaleString()}
              </p>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

/* PAGE STYLE */

// const pageStyle = {
//   minHeight: "100vh",
//   padding: "40px",
//   textAlign: "center",
//   color: "white"
// };
const pageStyle = {
  padding: "40px",
  textAlign: "center",
  color: "white"
};

/* TITLE */

const titleStyle = {
  fontSize: "40px",
  marginBottom: "30px",
  fontWeight: "600",
  marginTop:"90px"
};

/* GRID */

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
  marginTop: "20px"
};

/* CARD */

const cardStyle = {
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(12px)",
  borderRadius: "18px",
  padding: "25px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  border: "1px solid rgba(255,255,255,0.08)",
  transition: "0.3s"
};

/* SEAT TEXT */

const seatStyle = {
  fontSize: "22px",
  marginBottom: "10px",
  color: "#38b6d9"
};

export default MyBookings;