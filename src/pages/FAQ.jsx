import React, { useState } from "react";
import "../faq.css";

const data = [
  // GENERAL
  { q: "What is LiveStudyRoom?", a: "LiveStudyRoom is a virtual platform where users can join study rooms, book seats, and study with focus using a timer-based system." },
  { q: "Who can use LiveStudyRoom?", a: "Students, professionals, or anyone looking for a distraction-free study environment can use it." },
  { q: "Is LiveStudyRoom free to use?", a: "Yes, currently the platform is free for all users." },

  // BOOKING
  { q: "How do I book a seat?", a: "Login to your account, choose an available seat, and click on the 'Book' button." },
  { q: "Can I change my seat after booking?", a: "No, once booked, the seat remains reserved until your session ends." },
  { q: "What happens if all seats are full?", a: "You will need to wait until a seat becomes available or refresh the page." },

  // TIMER
  { q: "How does the study timer work?", a: "A countdown timer starts when you book a seat and automatically ends your session when time is up." },
  { q: "Can I extend my study session?", a: "Currently, sessions cannot be extended, but you can rebook a seat after it ends." },
  { q: "What happens when the timer ends?", a: "Your session ends automatically and the seat becomes available for others." },

  // ACCOUNT
  { q: "Do I need an account to use the platform?", a: "Yes, you must log in to book seats and access study rooms." },
  { q: "What if I forget my login details?", a: "You can reset your password (if implemented) or contact the admin." },

  // RULES
  { q: "What rules should I follow?", a: "Maintain discipline, avoid spam, respect others, and stay focused on studying." },
  { q: "What happens if I break the rules?", a: "You may receive a warning or be removed from the session by the admin." },

  // TECHNICAL
  { q: "What if the timer is not working?", a: "Try refreshing the page or logging in again. If the issue continues, contact support." },
  { q: "Does the platform work on mobile devices?", a: "Yes, LiveStudyRoom is responsive and works on mobile and tablets." },
  { q: "What happens if I accidentally close the tab?", a: "Your session may continue temporarily, but you might lose access depending on system handling." },

  // ADVANCED (impressive ones)
  { q: "How does the system prevent seat misuse?", a: "The platform uses a timer-based locking system that automatically releases seats after session completion." },
  { q: "Is my data safe on this platform?", a: "Yes, only necessary user data is stored and it is not shared with third parties." },
  { q: "Can admins monitor user activity?", a: "Yes, admins can monitor seat usage and manage sessions to maintain discipline." }
];
function FAQ() {
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = data.filter(item =>
    item.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>

      <input
        type="text"
        placeholder="Search your question..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="faq-search"
      />

      <div className="faq-list">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="faq-card"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="faq-question">
              <span>{item.q}</span>
              <span>{open === i ? "−" : "+"}</span>
            </div>

            {open === i && (
              <p className="faq-answer">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;