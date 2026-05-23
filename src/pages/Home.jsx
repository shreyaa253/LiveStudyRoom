import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">

        <h1 className="title">
          ✐ᝰLiveStudyRoom
        </h1>

        <p className="subtitle">
          Book your study seat, stay focused, and study with discipline in a
          distraction-free environment.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/seats")}>
            Book a Seat
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/rules")}
          >
            Rules & Guidelines
          </button>
        </div>

      </section>


      {/* FEATURES SECTION */}
      <section className="features">

        <div className="feature-card">
          <h3>⏱ Real-Time Seat Booking</h3>
          <p>
            Instantly check available seats and reserve your study slot
            without waiting.
          </p>
        </div>

        <div className="feature-card">
          <h3>📚 Focused Study Environment</h3>
          <p>
            Designed for students who want a quiet and productive
            study atmosphere.
          </p>
        </div>

        <div className="feature-card">
          <h3>📊 Track Your Study Time</h3>
          <p>
            Monitor your booked hours and build consistent
            study habits every day.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;