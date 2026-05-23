import React from "react";

function Footer() {

  const footerStyle = {
    width: "100%",
    background: "rgba(0,0,0,0.35)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    marginTop: "60px",
    color: "white"
  };

  const container = {
    maxWidth: "1200px",
    margin: "auto",
    padding: "40px 30px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: "40px"
  };

  const heading = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "12px"
  };

  // const link = {
  //   display: "block",
  //   fontSize: "14px",
  //   marginBottom: "8px",
  //   opacity: "0.85",
  //   cursor: "pointer"
  // };
  const link = {
  display: "block",
  fontSize: "14px",
  marginBottom: "8px",
  opacity: "0.85",
  cursor: "pointer",
  textDecoration: "none",
  color: "white",
};

const linkHover = {
  color: "#e4bc1f", // change color on hover
};

  const bottomBar = {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    textAlign: "center",
    padding: "15px",
    fontSize: "13px",
    opacity: "0.8"
  };

  return (
    <footer style={footerStyle}>

      <div style={container}>

        {/* About */}
        <div>
          <div style={{fontSize:"20px", fontWeight:"600", marginBottom:"10px"}}>
            ✐ᝰLiveStudyRoom
          </div>
          <p style={{fontSize:"14px", opacity:"0.8"}}>
            A smart digital platform for students to easily book library seats,
            manage study sessions, and find a productive study environment.
          </p>
        </div>

       {/* Quick Links */}
<div>
  <div style={heading}>Quick Links</div>
  <a style={link} href="/">Home</a>
  <a style={link} href="/book-seat">Book Seat</a>
  <a style={link} href="/my-bookings">My Bookings</a>
  <a style={link} href="/login">Login</a>
</div>

        {/* Support */}
          <div>
            <div style={heading}>Support</div>
            <a style={link} href="/rules">Rules and Guidelines</a>
            <a style={link} href="/faq">Help Center</a>
            <span style={link}>Privacy Policy</span>
            <span style={link}>Contact Us</span>
          </div>

        {/* Contact */}
        <div>
          <div style={heading}>Contact</div>
          <div style={link}>📍 Mumbai, India</div>
          <div style={link}>📧 support@livestudyroom.com</div>
          <div style={link}>📞 +91 93725 93700</div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div style={bottomBar}>
        © 2026 LiveStudyRoom | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer;