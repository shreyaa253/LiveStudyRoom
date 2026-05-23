import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Seats from "./pages/Seats";
import Bookings from "./pages/Bookings";
import MyBookings from "./pages/MyBookings";
import Rules from "./pages/Rules";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import BookingHistory from "./pages/BookingHistory";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Rules */}
          <Route path="/rules" element={<Rules />} />

          {/* Seats Page */}
          <Route
            path="/seats"
            element={
              <ProtectedRoute>
                <Seats />
              </ProtectedRoute>
            }
          />

          {/* Booking Page */}
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }
          />

          {/* My Bookings Page */}
          <Route
            path="/mybookings"
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          />
          <Route path="/bookinghistory" element={<BookingHistory />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;