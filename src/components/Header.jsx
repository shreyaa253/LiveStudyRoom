import { Link } from "react-router-dom";

function Header() {

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "rgba(0,0,0,0.25)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  };

  const container = {
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 20px"
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "white"
  };

  const links = {
    display: "flex",
    gap: "25px"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    fontWeight: "500",
    position: "relative",
    transition: "all 0.3s ease"
  };

  const linkHoverStyle = {
    color: "#ffcc00" // highlight color on hover
  };

  return (
    <nav style={navStyle}>
      <div style={container}>
        <div style={logoStyle}>✐ᝰLiveStudyRoom</div>

        <div style={links}>
          {/* {["Home", "Seats", "BookingHistory", "Rules"].map((item, index) => (
            <Link
              key={index}
              style={linkStyle}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              onMouseEnter={e => e.target.style.color = "#ffcc00"}
              onMouseLeave={e => e.target.style.color = "white"}
            >
              {item} */}

              {["Home", "Seats", "BookingHistory", "Rules", "FAQ"].map((item, index) => (
  <Link
    key={index}
    style={linkStyle}
    to={
      item === "Home"
        ? "/"
        : item === "BookingHistory"
        ? "/bookinghistory"
        : item === "FAQ"
        ? "/faq"
        : `/${item.toLowerCase()}`
    }
    onMouseEnter={e => e.target.style.color = "#ffcc00"}
    onMouseLeave={e => e.target.style.color = "white"}
  >
    {item}

    {/* underline effect */}
    <span
      style={{
        position: "absolute",
        bottom: "-3px",
        left: 0,
        height: "2px",
        width: "0%",
        backgroundColor: "#ffcc00",
        transition: "width 0.3s"
      }}
      className="underline"
    />
  </Link>
))}
        </div>
      </div>
    </nav>
  );
}

export default Header;