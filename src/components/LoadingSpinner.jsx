import React from "react";

const LoadingSpinner = ({ message = "Please Wait", dots = 0 }) => {
  const dotString = '.'.repeat(dots); // Create the dots string based on the dots state

  return (
    <div style={styles.container}>
      <p style={styles.message}>{message} {dotString}</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f3f3f3",
  },
  message: {
    fontSize: "24px",
    color: "#800080",
    fontWeight: "bold", // Make the text bolder
    animation: "pulse 1.5s ease-in-out infinite",
  },
};

// Define the keyframes for a "pulse" animation
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes pulse {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  }
`;
document.head.appendChild(styleSheet);

export default LoadingSpinner;
