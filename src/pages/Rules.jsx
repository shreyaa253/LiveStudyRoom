import React from "react";

function Rules() {

  const studyRoomRules = [
    "Maintain complete silence inside the study room.",
    "Mobile phones must be kept on silent mode.",
    "Do not disturb other users during study sessions.",
    "Keep the study area clean and organized.",
    "Personal belongings are the responsibility of the user."
  ];

  const labRules = [
    "Use computers and equipment responsibly.",
    "Do not install unauthorized software.",
    "Do not access restricted or harmful websites.",
    "Report any system malfunction to the administrator.",
    "Shut down systems properly after use."
  ];

  const seatPolicy = [
    "Seat booking must be done through the Live Study Room system.",
    "Only one seat can be booked per user at a time.",
    "Seats cannot be reserved for others.",
    "Users must occupy only the seat assigned to them.",
    "Misuse of booking privileges may lead to account suspension."
  ];

  const sessionLimits = [
    "Each booking session has a fixed time duration.",
    "Users must vacate their seat immediately after their session ends.",
    "If a user fails to occupy the seat within the allowed time, the seat may be released.",
    "Session extensions depend on seat availability.",
    "Continuous misuse of time slots may restrict future bookings."
  ];

  const pageStyle = {
    minHeight: "100vh",
    padding: "50px 20px",
    fontFamily: "Segoe UI, sans-serif",
    color: "white"
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "40px",
    letterSpacing: "2px",
    marginTop:"40px"
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "30px"
  };

  const card = {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    borderRadius: "18px",
    padding: "25px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
    transition: "all 0.35s ease",
    cursor: "pointer"
  };

  const sectionTitle = {
    fontSize: "22px",
    marginBottom: "12px",
    color: "#ffd369"
  };

  const list = {
    lineHeight: "1.8",
    fontSize: "15px"
  };

  return (
    <div style={pageStyle}>

      <h1 style={titleStyle}>
        ✐ᝰLiveStudyRoom - Rules & Guidelines
      </h1>

      <div style={grid}>

        <div
          style={card}
          onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-10px) scale(1.03)"}
          onMouseLeave={(e)=>e.currentTarget.style.transform="none"}
        >
          <h2 style={sectionTitle}>📖 Study Room Rules</h2>
          <ul style={list}>
            {studyRoomRules.map((rule,index)=>(
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        <div
          style={card}
          onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-10px) scale(1.03)"}
          onMouseLeave={(e)=>e.currentTarget.style.transform="none"}
        >
          <h2 style={sectionTitle}>💻 Lab Rules</h2>
          <ul style={list}>
            {labRules.map((rule,index)=>(
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        <div
          style={card}
          onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-10px) scale(1.03)"}
          onMouseLeave={(e)=>e.currentTarget.style.transform="none"}
        >
          <h2 style={sectionTitle}>🪑 Seat Usage Policy</h2>
          <ul style={list}>
            {seatPolicy.map((rule,index)=>(
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        <div
          style={card}
          onMouseEnter={(e)=>e.currentTarget.style.transform="translateY(-10px) scale(1.03)"}
          onMouseLeave={(e)=>e.currentTarget.style.transform="none"}
        >
          <h2 style={sectionTitle}>⏳ Session Time Limits</h2>
          <ul style={list}>
            {sessionLimits.map((rule,index)=>(
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

      </div>

      <p
        style={{
          textAlign:"center",
          marginTop:"30px",
          opacity:"0.8",
          fontSize:"14px"
        }}
      >
        By using the Live Study Room platform, users agree to follow these rules
        and maintain a respectful study environment.
      </p>

    </div>
  );
}

export default Rules;

// import React from "react";

// function Rules() {
//   const studyRoomRules = [
//     "Maintain complete silence inside the study room.",
//     "Mobile phones must be kept on silent mode.",
//     "Do not disturb other users during study sessions.",
//     "Keep the study area clean and organized.",
//     "Personal belongings are the responsibility of the user."
//   ];

//   const labRules = [
//     "Use computers and equipment responsibly.",
//     "Do not install unauthorized software.",
//     "Do not access restricted or harmful websites.",
//     "Report any system malfunction to the administrator.",
//     "Shut down systems properly after use."
//   ];

//   const seatPolicy = [
//     "Seat booking must be done through the Live Study Room system.",
//     "Only one seat can be booked per user at a time.",
//     "Seats cannot be reserved for others.",
//     "Users must occupy only the seat assigned to them.",
//     "Misuse of booking privileges may lead to account suspension."
//   ];

//   const sessionLimits = [
//     "Each booking session has a fixed time duration.",
//     "Users must vacate their seat immediately after their session ends.",
//     "If a user fails to occupy the seat within the allowed time, the seat may be released.",
//     "Session extensions depend on seat availability.",
//     "Continuous misuse of time slots may restrict future bookings."
//   ];

//   const container = {
//     minHeight: "100vh",
//     padding: "50px 20px",
//     fontFamily: "Segoe UI, sans-serif",
//     color: "white"
//   };

//   const grid = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//     gap: "25px",
//     marginTop: "40px"
//   };

//   const card = {
//     background: "rgba(255,255,255,0.08)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "15px",
//     padding: "25px",
//     boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease"
//   };

//   const title = {
//     fontSize: "28px",
//     textAlign: "center",
//     fontWeight: "600",
//     letterSpacing: "1px"
//   };

//   const sectionTitle = {
//     fontSize: "20px",
//     marginBottom: "12px",
//     color: "#f0d085"
//   };

//   const list = {
//     lineHeight: "1.8",
//     fontSize: "15px"
//   };

//   return (
//     <div style={container}>
//       <h1 style={title}> ✐ᝰLive Study Room - Rules & Guidelines</h1>

//       <div style={grid}>
        
//         <div style={card}>
//           <h2 style={sectionTitle}>📖 Study Room Rules</h2>
//           <ul style={list}>
//             {studyRoomRules.map((rule, index) => (
//               <li key={index}>{rule}</li>
//             ))}
//           </ul>
//         </div>

//         <div style={card}>
//           <h2 style={sectionTitle}>💻 Lab Rules</h2>
//           <ul style={list}>
//             {labRules.map((rule, index) => (
//               <li key={index}>{rule}</li>
//             ))}
//           </ul>
//         </div>

//         <div style={card}>
//           <h2 style={sectionTitle}>🪑 Seat Usage Policy</h2>
//           <ul style={list}>
//             {seatPolicy.map((rule, index) => (
//               <li key={index}>{rule}</li>
//             ))}
//           </ul>
//         </div>

//         <div style={card}>
//           <h2 style={sectionTitle}>⏳ Session Time Limits</h2>
//           <ul style={list}>
//             {sessionLimits.map((rule, index) => (
//               <li key={index}>{rule}</li>
//             ))}
//           </ul>
//         </div>

//       </div>

//       <p
//         style={{
//           textAlign: "center",
//           marginTop: "40px",
//           fontSize: "14px",
//           opacity: "0.8"
//         }}
//       >
//         By using the Live Study Room platform, users agree to follow all rules
//         and maintain a respectful study environment.
//       </p>
//     </div>
//   );
// }

// export default Rules;